import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp
} from 'firebase/firestore';
import _uniqueId from 'lodash/uniqueId';
import '../firebase';

const useAddCategory = () => {
  const auth = getAuth();
  const db = getFirestore();

  const addMainCategory = async (arg) => {
    const user = auth.currentUser;
    const categoryRef = await addDoc(collection(db, 'mainCategory'), {
      category: arg,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
      id: _uniqueId('category-'),
    });
  };
  return { addMainCategory };
};

export default useAddCategory;
