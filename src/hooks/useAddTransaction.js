import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import '../firebase';

const useAddTransaction = () => {
  const auth = getAuth();
  const db = getFirestore();

  const addTransaction = async (arg) => {
    const user = auth.currentUser;
    const transactionRef = await addDoc(collection(db, 'transaction'), {
      productName: arg.name,
      category: arg.category,
      subCategory: arg.subCategory,
      price: 213,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
    });
  };
  return { addTransaction };
};

export default useAddTransaction;
