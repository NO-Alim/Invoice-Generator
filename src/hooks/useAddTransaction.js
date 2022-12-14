import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import _uniqueId from 'lodash/uniqueId';
import { useDispatch } from 'react-redux';
import { reset } from '../features/cart/cartSlice';
import '../firebase';

const useAddTransaction = () => {
  const auth = getAuth();
  const db = getFirestore();
  const dispatch = useDispatch();

  const addTransaction = async (cart, invoiceNumber) => {
    const user = auth.currentUser;

    //this three array for firebase query
    const productNameArray = cart.productList.map((item) => item.name);
    const productsCategoryArray = cart.productList.map((item) => item.category);
    const productsSubCategoryArray = cart.productList.map(
      (item) => item.subCategory
    );

    const transactionRef = await addDoc(collection(db, 'transaction'), {
      products: cart.productList,
      totalPrice: cart.totalPrice,
      totalItem: cart.totalItem,
      invoice: invoiceNumber,
      productNameArray,
      productsCategoryArray,
      productsSubCategoryArray,
      userFK: user.uid,
      timeStamp: serverTimestamp(),
      id: _uniqueId('transaction-'),
    });
    dispatch(reset());
  };
  return { addTransaction };
};

export default useAddTransaction;
