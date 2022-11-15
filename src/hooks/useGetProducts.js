import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useGetProducts = (categoryString, subCategoryString) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  let q = query(collection(db, 'products'), where('userFK', '==', user.uid));

  if (categoryString) {
    q = query(q, where('category', '==', categoryString));
  }
  if (subCategoryString) {
    q = query(q, where('subCategory', '==', subCategoryString));
  }

  useEffect(() => {
    if (user.uid) {
      setLoading(true);
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProducts(data);
      });
      setLoading(false);
      return unsubscribe;
    } else {
      return;
    }
  }, [categoryString, subCategoryString]);
  return { products, loading };
};

export default useGetProducts;
