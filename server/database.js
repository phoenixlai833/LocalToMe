import { db } from '../firebase/clientApp';
import { collection, getDocs } from 'firebase/firestore';

export async function getFoodBanks() {
    const foodBankCol = collection(db, '/foodBank');
    const foodBankSnapshot = await getDocs(foodBankCol);
    const foodBankList = foodBankSnapshot.docs.map(doc => doc.data());
    // console.log(foodBankList)
    return foodBankList;
}

export async function getFoodBank(id) {
    const foodBankCol = collection(db, '/foodBank');
    const foodBankSnapshot = await getDocs(foodBankCol);
    const foodBank = foodBankSnapshot.docs.map(doc => doc.data().id == id);
    // console.log(foodBank)
    return foodBank;
}