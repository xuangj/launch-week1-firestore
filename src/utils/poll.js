import { collection, getDocs, addDoc, updateDoc, doc, increment } from "firebase/firestore";
import { db } from "../firebase.js";

const fetchPollOptions = async () => {
    const querySnapshot = await getDocs(collection(db, "pollChoices"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
export default fetchPollOptions;

export const addPollChoice = async (text) => {
    return await addDoc(collection(db, "pollChoices"), {
        text,
        upvotes: 0
    });
};

export const upvotePollChoice = async (id) => {
    const optionRef = doc(db, "pollChoices", id);
    return await updateDoc(optionRef, {
        upvotes: increment(1)
    });
};