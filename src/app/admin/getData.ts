import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase";

async function fetchContacts() {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    const contacts = querySnapshot.docs.map(doc => ({
        id:doc.id,
        ...doc.data(),
    }));
    return contacts;
}

async function fetchTrial() {
    const querySnapshot = await getDocs(collection(db, "trial"));
    const trial = querySnapshot.docs.map(doc => ({
        id:doc.id,
        ...doc.data(),
    }));
    return trial;
}