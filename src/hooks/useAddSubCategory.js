import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import '../firebase';

const useAddSubCategory = () => {
  const auth = getAuth();
  const db = getFirestore();

  const addSubCategory = async (arg) => {
    const user = auth.currentUser;
    const transactionRef = await addDoc(collection(db, 'subCategory'), {
      category: arg.category,
      subCategory: arg.subCategory,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
    });
  };
  return { addSubCategory };
};

export default useAddSubCategory;
