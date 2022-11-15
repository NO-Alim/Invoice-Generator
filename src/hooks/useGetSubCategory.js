import { getAuth } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../firebase';

export default function useGetSubCategory(queryString) {
  const [subCategory, setSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const { category } = useSelector((state) => state.orderDesk);

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
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSubCategory(data);
      });
      setLoading(false);
      return unsubscribe;
    } else {
      return;
    }
  }, [category, queryString]);

  return { subCategory, loading };
}
