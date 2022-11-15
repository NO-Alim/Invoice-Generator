import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../firebase';

export default function useGetTransaction() {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState();

  const db = getFirestore();
  const auth = getAuth();

  const getTransaction = async () => {
    const user = auth.currentUser;
    let data = [];
    if (user.uid) {
      const q = query(
        collection(db, 'transaction'),
        where('userFK', '==', user.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
      });
    }
    setTransaction(data);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        getTransaction();
      }
    });
    setLoading(false);
    return unsubscribe;
  }, []);

  return { transaction, loading, error };
}
