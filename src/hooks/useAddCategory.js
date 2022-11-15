import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import '../firebase';

const useAddCategory = () => {
  const auth = getAuth();
  const db = getFirestore();

  const addMainCategory = async (arg) => {
    const user = auth.currentUser;
    const transactionRef = await addDoc(collection(db, 'mainCategory'), {
      category: arg,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
    });
  };
  return { addMainCategory };
};

export default useAddCategory;
