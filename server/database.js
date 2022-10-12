import { db } from '../firebase/clientApp';
import { collection, getDocs, addDoc } from 'firebase/firestore';

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