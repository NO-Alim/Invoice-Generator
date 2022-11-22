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
  const [error, setError] = useState('');

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
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const withKey = { key: doc.id, ...doc.data() };
            return withKey;
          });
          setProducts(data);
          setLoading(false);
        },
        (error) => {
          setError(error);
        }
      );

      return unsubscribe;
    } else {
      return;
    }
  }, [categoryString, subCategoryString]);
  return { products, loading, error };
};

export default useGetProducts;
