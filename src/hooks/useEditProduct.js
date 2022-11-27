import { getAuth } from 'firebase/auth';
import { doc, getFirestore, updateDoc } from 'firebase/firestore';
import '../firebase';

const useEditProduct = () => {
  const auth = getAuth();
  const db = getFirestore();

  const editProduct = async (data, key) => {
    const docRef = doc(db, 'products', key);

    const productRef = await updateDoc(docRef, {
      productName: data.productName,
      productPrice: data.productPrice,
      category: data.category,
      subCategory: data.subCategory,
    });
  };
  return { editProduct };
};

export default useEditProduct;
