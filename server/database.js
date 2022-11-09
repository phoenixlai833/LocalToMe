import { db } from '../firebase/clientApp';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, deleteObject } from "firebase/storage";

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

export async function getEvent(id) {
  const eventRef = doc(db, "event", id);
  const eventSnap = await getDoc(eventRef);
  const event = { id, ...eventSnap.data() };
  // console.log('hi', event)
  return event;
}

export async function addEvent(event) {
  const eventCollection = collection(db, "event");
  const docRef = await addDoc(eventCollection, event);
  return docRef;
}

export async function editEvent(event) {
  const eventRef = doc(db, "event", event.id);
  const eventSnap = await updateDoc(eventRef, event);
  return event.id;
}

export async function deleteEvent(id) {
  const eventCollection = doc(db, "event", id);
  const eventSnap = await getDoc(eventCollection);
  const fileUrl = eventSnap.data().eventImage
  const storage = getStorage();
  const fileRef = ref(storage, fileUrl);
  const fileName = decodeURIComponent(fileUrl.split('/').pop().split('?')[0])
  console.log(fileName)
  if (fileName !== "foodBankImageTest.jpg") {
    deleteObject(fileRef);
    await deleteDoc(doc(db, "event", id));
    return;
  }
  await deleteDoc(doc(db, "event", id));
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
  const news = newsSnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return news;
}


//one news item
export async function getNews(id) {
  const newsRef = doc(db, "news", id);
  const newsSnap = await getDoc(newsRef);
  const news = { id, ...newsSnap.data() };
  // console.log('hi', news)
  return news;
}


export async function addNews(news) {
  const newsCollection = collection(db, "news");
  const docRef = await addDoc(newsCollection, news);
  return docRef.id;
}

export async function editNews(news) {
  const newsRef = doc(db, "news", news.id);
  const newsSnap = await updateDoc(newsRef, news);
  return news.id;
}

export async function deleteNews(id) {
  const newsCollection = doc(db, "news", id);
  const newsSnap = await getDoc(newsCollection);
  const fileUrl = newsSnap.data().newsImage
  const storage = getStorage();
  const fileRef = ref(storage, fileUrl);
  deleteObject(fileRef);
  await deleteDoc(doc(db, "news", id));
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

