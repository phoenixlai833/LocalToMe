import { db, storage } from '../firebase/clientApp';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { refFromURL } from "firebase/storage";

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
  return docRef.id;
}

export async function editEvent(event) {
  const eventRef = doc(db, "event", event.id);
  const eventSnap = await updateDoc(eventRef, event);
  return event.id;
}

export async function deleteEvent(id) {
  // const eventCollection = doc(db, "event", id);
  // const eventSnap = await getDoc(eventCollection);
  // const fileUrl = eventSnap.data().eventImage
  // const fileRef = storage.refFromURL(fileUrl);
  // console.log(fileRef)
  // fileRef.delete()

  await deleteDoc(doc(db, "event", id));
}

// _________________________________________________________________________
// eventCategories

export async function getEventCategories() {
  const eventCategoryCol = collection(db, "eventCategory");
  const eventCategorySnap = await getDocs(eventCategoryCol);
  const eventCategories = eventCategorySnap.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return eventCategories;
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

console.log("nnnn",getAllNews());

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
  return;
}

export async function getNewsCategories() {
  return;
}