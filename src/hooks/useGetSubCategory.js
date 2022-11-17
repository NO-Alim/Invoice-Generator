import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../firebase';

export default function useGetSubCategory(queryString) {
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  let q = query(collection(db, 'subCategory'), where('userFK', '==', user.uid));
  if (queryString) {
    q = query(q, where('category', '==', queryString));
  }

  useEffect(() => {
    if (user.uid) {
      setLoading(true);
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setSubCategory(data);
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
  }, [queryString]);

  return { subCategory, loading };
}
