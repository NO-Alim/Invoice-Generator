import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import _uniqueId from 'lodash/uniqueId';
import '../firebase';

const useAddProduct = () => {
  const auth = getAuth();
  const db = getFirestore();

  const addProduct = async (arg) => {
    const user = auth.currentUser;
    const productRef = await addDoc(collection(db, 'products'), {
      id: _uniqueId('product-'),
      productName: arg.productName,
      productPrice: arg.productPrice,
      category: arg.category,
      subCategory: arg.subCategory,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
    });
  };
  return { addProduct };
};

export default useAddProduct;
