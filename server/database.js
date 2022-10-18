import { db } from "../firebase/clientApp";
import { collection, getDocs, addDoc } from "firebase/firestore";
// import addEvent from '../pages/events/add';

// food banks
export async function getFoodBanks() {
  const foodBankCol = collection(db, "/foodBank");
  const foodBankSnapshot = await getDocs(foodBankCol);
  const foodBankList = foodBankSnapshot.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  // console.log(foodBankList)
  return foodBankList;
}

export async function getFoodBank(id) {
  const foodBankCol = collection(db, "/foodBank");
  const foodBankSnapshot = await getDocs(foodBankCol);
  // const foodBank = foodBankSnapshot.docs.map(doc => doc.data())[0];
  const foodBank = foodBankSnapshot.docs.find((doc) => {
    if (doc.id == id) {
      let data = doc.data();
      return { id, ...data };
    }
  });
  // console.log(foodBank)
  return foodBank;
}

export async function addFoodBank(foodBanks) {
  const foodBankCol = collection(db, "/foodBank");
  const foodbankId = await addDoc(foodBankCol, foodBanks);
  return foodbankId;
}

// _________________________________________________________________________
// events
export async function getEvents() {
  const eventCollection = collection(db, "/event");
  const eventSnapshot = await getDocs(eventCollection);
  const eventList = eventSnapshot.docs.map((doc) => {
    let id = doc.id;
    let data = doc.data();
    return { id, ...data };
  });
  return eventList;
}

export async function getEvent(id) {
  const eventCollection = collection(db, "/event");
  const eventSnapshot = await getDocs(eventCollection);
  const event = eventSnapshot.docs.find((doc) => {
    if (doc.id == id) {
      let data = doc.data();
      return { id, ...data };
    }
  });
  return event;
}

export async function addEvent(event) {
  const eventCollection = collection(db, "/event");
  const eventId = await addDoc(eventCollection, event);
  return eventId;
}

export async function editEvent(event) {
    const eventCollection = collection(db, "/event");
    return event.id
}

export async function deleteEvent(event) {
}