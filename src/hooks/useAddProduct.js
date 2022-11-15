import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import '../firebase';

const useAddProduct = () => {
  const auth = getAuth();
  const db = getFirestore();

  const addProduct = async (arg) => {
    const user = auth.currentUser;
    const transactionRef = await addDoc(collection(db, 'products'), {
      productName: arg.name,
      productPrice: arg.price,
      productUrl:
        'https://robohash.org/51f20e771c1c5876dbc9be6fa690132a?set=set4&bgset=&size=400x400',
      category: arg.category,
      subCategory: arg.subCategory,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
    });
  };
  return { addProduct };
};

export default useAddProduct;
