import { db } from "../firebase/clientApp";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import algoliasearch from "algoliasearch";
const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_CLIENT_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY_ADMIN
);

// food banks
export async function getFoodBanks() {
  const foodBankCol = collection(db, "foodBank");
  const foodBankSnap = await getDocs(foodBankCol);
  const foodBanks = foodBankSnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return foodBanks;
}

export async function getFoodBank(id) {
  const foodBankRef = doc(db, "foodBank", id);
  const foodBankSnap = await getDoc(foodBankRef);
  const foodBank = { id, ...foodBankSnap.data() };
  return foodBank;
}

export async function addFoodBank(foodBank) {
  const foodBankCol = collection(db, "foodBank");
  const foodbankId = await addDoc(foodBankCol, foodBank);
  return foodbankId;
}

// _________________________________________________________________________
// events
export async function getEvents() {
  const eventCollection = collection(db, "event");
  const eventSnap = await getDocs(eventCollection);
  const events = eventSnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return events;
}

export async function getEventsWithUser(userEmail) {
  const eventCollection = collection(db, "event");
  const eventSnap = await getDocs(eventCollection);
  let events = eventSnap.docs.map(async (doc) => {
    let id = doc.id;
    let data = doc.data();
    const eventCreatorSnap = await getDoc(data.eventCreatorId);
    const eventCreator = {
      id: eventCreatorSnap.id,
      ...eventCreatorSnap.data(),
    };
    return { id, ...data, eventCreatorId: eventCreator };
  });
  events = await Promise.all(events);
  events = events.filter((e) => e.eventCreatorId.email == userEmail);
  return events;
}

//get event by id with the creator info
export async function getEvent(id) {
  const eventRef = doc(db, "event", id);
  const eventSnap = await getDoc(eventRef);
  if (!eventSnap.data()) {
    return undefined
  }
  const fileUrl = eventSnap.data().eventImage;
  let fileName = decodeURIComponent(fileUrl.split("/home").pop().split("?")[0]);
  const event = { id, ...eventSnap.data(), fileName };
  const eventCreatorSnap = await getDoc(event.eventCreatorId); //should change the eventCreatorId to eventCreatorData
  const eventCreator = { id: eventCreatorSnap.id, ...eventCreatorSnap.data() };
  const joinedEvent = {
    ...event,
    eventCreatorId: eventCreator,
  };
  return joinedEvent;
}
// joinedEvent:
// { "id": "8sahmToVxgeRbkqaMIq5",
//  "eventContent": "For the month of October,Community Taps + Pizza will be donating $1 from each Fernie beer poured and $2 from every Manchester Pizza sold to the Greater Vancouver Food Bank!",
//  "eventDate": "2022-11-02T18:00:00.000Z",
//  "eventTags": [{ "categoryName": "Fundraiser", "id": "D1m7ubq7VZyQFbFAfisa" }],
// "eventLocation": "1191 Commercial Drive, Vancouver, BC, Canada",
// "eventName": "Brewery of the Month & Feature Pizza",
// "eventImage": "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/community.png?alt=media&token=73b82442-d216-47d6-a512-d1d39cc36fb1",
// "eventCreatorId":
// { "id": "TYCuxDAHWBS0zuQZSmRb",
// "emailVerified": null,
// "image": "https://avatars.githubusercontent.com/u/41124039?v=4",
// "email": "phoenixlai833@gmail.com",
// "name": "Phoenix Lai" }
// }

export async function addEvent(event) {
  const eventCollection = collection(db, "event");
  const userRef = doc(db, "users", event.eventCreatorId);
  event = { ...event, eventCreatorId: userRef };
  const docRef = await addDoc(eventCollection, event);
  return docRef;
}

export async function editEvent(event) {
  const eventRef = doc(db, "event", event.id);
  const eventSnap = await updateDoc(eventRef, event);
  return event.id;
}

export async function deleteEvent(id) {
  const index = client.initIndex("prod_EVENTS");
  const eventCollection = doc(db, "event", id);
  const eventSnap = await getDoc(eventCollection);
  const fileUrl = eventSnap.data().eventImage;
  const storage = getStorage();
  const fileRef = ref(storage, fileUrl);
  const fileName = decodeURIComponent(fileUrl.split("/home").pop().split("?")[0]);
  console.log(fileName);
  if (fileName !== "event-default.png") {
    await deleteObject(fileRef);
  }
  await deleteDoc(doc(db, "event", id));
  index.deleteObject(id).wait();
}

// _________________________________________________________________________
// all catergories
export async function getAllCategories() {
  const categoryCollection = collection(db, "category");
  // console.log(categoryCollection)
  const categorySnap = await getDocs(categoryCollection);
  const category = categorySnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return category;
}

// _________________________________________________________________________
// all the news
export async function getAllNews() {
  const newsCollection = collection(db, "news");
  const newsSnap = await getDocs(newsCollection);
  const news = await Promise.all(
    newsSnap.docs.map(async (doc) => {
      let id = doc.id;
      let data = doc.data();
      let userSnap = await getDoc(data.newsCreatorId);
      let user = userSnap.data();
      return { id, ...data, newsCreatorId: user };
    })
  );
  return news;
}

//one news item
export async function getNews(id) {
  const newsRef = doc(db, "news", id);
  const newsSnap = await getDoc(newsRef);
  const fileUrl = newsSnap.data().newsImage;
  let fileName = decodeURIComponent(fileUrl.split("/home").pop().split("?")[0]);
  const news = { id, ...newsSnap.data(), fileName };
  // const newsCreatorSnap = await getDoc(news.newsCreatorId);//should change the eventCreatorId to eventCreatorData
  // const newsCreator = { id: newsCreatorSnap.id, ...newsCreatorSnap.data() };
  // const joinedNews = {
  //   ...news,
  //   newsCreatorId: newsCreator
  // }
  // return joinedNews;
  return news;
}

export async function addNews(news) {
  const newsCollection = collection(db, "news");
  const userRef = doc(db, "users", news.newsCreatorId);
  news = { ...news, newsCreatorId: userRef };
  const docRef = await addDoc(newsCollection, news);
  return docRef.id;
}

export async function editNews(news) {
  const newsRef = doc(db, "news", news.id);
  const newsSnap = await updateDoc(newsRef, news);
  return news.id;
}

export async function deleteNews(id) {
  const index = client.initIndex("prod_NEWS");
  const newsCollection = doc(db, "news", id);
  const newsSnap = await getDoc(newsCollection);
  const fileUrl = newsSnap.data().newsImage;
  if (fileUrl !== "") {
    const storage = getStorage();
    const fileRef = ref(storage, fileUrl);
    await deleteObject(fileRef);
  }
  await deleteDoc(doc(db, "news", id));
  index.deleteObject(id).wait();
}

export async function getNewsCategories() {
  return;
}

//get all the pantries
export async function getPantries() {
  const pantryCol = collection(db, "pantry");
  const pantrySnap = await getDocs(pantryCol);
  const pantries = pantrySnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return pantries;
}

//get all the fridges
export async function getFridges() {
  const fridgeCol = collection(db, "fridge");
  const fridgeSnap = await getDocs(fridgeCol);
  const fridges = fridgeSnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return fridges;
}

//get all the users:
export async function getUsers() {
  const userCol = collection(db, "users");
  const userSnap = await getDocs(userCol);
  const users = userSnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return users;
}

//get one user:
export async function getUser(id) {
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  const baseUser = userSnap.data();
  if (baseUser.favorite) {
    if (baseUser.favorite.event) {
      baseUser.favorite.event = (await Promise.all(
        baseUser.favorite.event.map(async (eventRef) => {
          const eventObj = await getEvent(eventRef.id);
          return eventObj;
        })
      )).filter((event) => event !== undefined);
    }
    if (baseUser.favorite.location) {
      baseUser.favorite.location = (await Promise.all(
        baseUser.favorite.location.map(async (locationRef) => {
          const locationObj = await getFoodBank(locationRef.id);
          // const locationObjSnap = await getDoc(locationRef);
          // const locationObj = locationObjSnap.data();
          return locationObj;
        })
      )).filter((location) => location !== undefined);
    }
  }
  // baseUser.favorite.foodbank = await Promise.all(baseUser.favorite.foodbank.map(async (locationRef) => {
  //   const locationObjSnap = await getDoc(locationRef);
  //   const locationObj = locationObjSnap.data();
  //   return { id: locationObjSnap.id, ...locationObj }
  // }))
  const user = { id, ...baseUser };
  return user;
}

//edit one user 
export async function editUser(user) {
  console.log(user)
  const userRef = doc(db, "users", user.id);
  await updateDoc(userRef, user);
  return user.id;
}

//add favorite event/location to user
// export async function addFavorite(userId, type, itemId) { //type have to be "event" or "location"
//   const userRef = doc(db, "users", userId);
//   const userSnap = await getDoc(userRef);
//   const baseUser = userSnap.data();
//   const itemRef = doc(db, type, itemId);
//   baseUser.favorite[type].push(itemRef);
//   await updateDoc(userRef, baseUser);
//   return baseUser;
// }



export async function addFavorite(userId, type, itemId) { //type have to be "event" or "location"
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  const baseUser = userSnap.data();
  const itemRef = doc(db, type, itemId);
  if (!baseUser.favorite) {
    baseUser.favorite = {}
  }
  if (baseUser.favorite[type]) {
    baseUser.favorite[type].push(itemRef);
  } else {
    baseUser.favorite[type] = [itemRef];
  }
  await updateDoc(userRef, baseUser);
  return baseUser;
}

export async function deleteFavorite(userId, type, itemId) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  const baseUser = userSnap.data();
  baseUser.favorite[type] = baseUser.favorite[type].filter(
    (item) => item.id != itemId
  );
  await updateDoc(userRef, baseUser);
  return baseUser;
}