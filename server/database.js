import { db } from '../firebase/clientApp';
import { collection, getDocs, addDoc } from 'firebase/firestore';
// import addEvent from '../pages/events/add';

export async function getFoodBanks() {
    const foodBankCol = collection(db, '/foodBank');
    const foodBankSnapshot = await getDocs(foodBankCol);
    const foodBankList = foodBankSnapshot.docs.map(doc => {
        let id = doc.id;
        let data = doc.data();
        return { id, ...data };
    });
    // console.log(foodBankList)
    return foodBankList;
}

export async function getFoodBank(id) {
    const foodBankCol = collection(db, '/foodBank');
    const foodBankSnapshot = await getDocs(foodBankCol);
    // const foodBank = foodBankSnapshot.docs.map(doc => doc.data())[0];
    const foodBank = foodBankSnapshot.docs.find(doc => {
        if (doc.id == id) {
            let data = doc.data();
            return { id, ...data }
        }
    });
    // console.log(foodBank)
    return foodBank;
}

export async function addFoodBank(foodBanks) {
    const foodBankCol = collection(db, '/foodBank');
    const foodbankId = await addDoc(foodBankCol, foodBanks);
    return foodbankId;
}

export async function getEvents() {
    const eventCollection = collection(db, "/event");
    const eventSnapshot = await getDocs(eventCollection);
    const eventList = eventSnapshot.docs.map(doc => {
        let id = doc.id;
        let data = doc.data();
        return { id, ...data };
    });
    // console.log(foodBankList)
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
    return eventId
}




// const eventsListData = [
//     { id: "1", creatorId: "Drake", eventName: "Event 1", eventDate: "JAN 01,2023", eventTime: "12:00pm-2:00pm", eventLocation: "Location 1", eventContactNumber: "6048888888", eventEmail: "foodevent@gmail.com", eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVH3VXUdZDx8JgVLzRLjGAo4rrvLzAnNZ8v0rhVZQqD0vjabyBSg8kR5G-VfZaaQClXk&usqp=CAU", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum neque scelerisque comm. Ac quis eget quis nec egestas", eventCategoryId: "1" },
//     { id: "2", creatorId: "Drake", eventName: "Event 2", eventDate: "FEB 01,2023", eventTime: "12:00pm-2:00pm", eventLocation: "Location 2", eventContactNumber: "6048888888", eventEmail: "foodevent@gmail.com", eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVH3VXUdZDx8JgVLzRLjGAo4rrvLzAnNZ8v0rhVZQqD0vjabyBSg8kR5G-VfZaaQClXk&usqp=CAU", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum neque scelerisque comm. Ac quis eget quis nec egestas", eventCategoryId: "2" },
//     { id: "3", creatorId: "Drake", eventName: "Event 3", eventDate: "MAR 01,2023", eventTime: "12:00pm-2:00pm", eventLocation: "Location 3", eventContactNumber: "6048888888", eventEmail: "foodevent@gmail.com", eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVH3VXUdZDx8JgVLzRLjGAo4rrvLzAnNZ8v0rhVZQqD0vjabyBSg8kR5G-VfZaaQClXk&usqp=CAU", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum neque scelerisque comm. Ac quis eget quis nec egestas", eventCategoryId: "3" },
//     { id: "4", creatorId: "Drake", eventName: "Event 4", eventDate: "APR 01,2023", eventTime: "12:00pm-2:00pm", eventLocation: "Location 4", eventContactNumber: "6048888888", eventEmail: "foodevent@gmail.com", eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVH3VXUdZDx8JgVLzRLjGAo4rrvLzAnNZ8v0rhVZQqD0vjabyBSg8kR5G-VfZaaQClXk&usqp=CAU", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum neque scelerisque comm. Ac quis eget quis nec egestas", eventCategoryId: "4" },
//     { id: "5", creatorId: "Drake", eventName: "Event 5", eventDate: "MAY 01,2023", eventTime: "12:00pm-2:00pm", eventLocation: "Location 5", eventContactNumber: "6048888888", eventEmail: "foodevent@gmail.com", eventImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVH3VXUdZDx8JgVLzRLjGAo4rrvLzAnNZ8v0rhVZQqD0vjabyBSg8kR5G-VfZaaQClXk&usqp=CAU", eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas condimentum neque scelerisque comm. Ac quis eget quis nec egestas", eventCategoryId: "5" },
// ]

