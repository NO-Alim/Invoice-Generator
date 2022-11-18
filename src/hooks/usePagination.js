import { getAuth } from 'firebase/auth';
import {
  collection,
  endBefore,
  getFirestore,
  limit,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import '../firebase';

export default function usePagination(name, itemLimit) {
  const [transaction, setTransaction] = useState([]); //list
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dataForCheckingNext, setDataForCheckingNext] = useState(itemLimit);
  const [page, setPage] = useState(1);

  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  let q = query(
    collection(db, 'transaction'),
    where('userFK', '==', user.uid),
    orderBy('timeStamp', 'desc'),
    limit(itemLimit + 1)
  );

  if (name) {
    q = query(q, where('productNameArray', 'array-contains', name));
  }

  useEffect(() => {
    if (user.uid) {
      setLoading(true);
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const withKey = {
              key: doc.id,
              ...doc.data(),
            };
            return withKey;
            //return doc.data();
          });
          setTransaction(data.slice(0, itemLimit));
          setDataForCheckingNext(data?.length);
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
  }, [name]);

  const showNext = () => {
    if (dataForCheckingNext > itemLimit) {
      q = query(q, startAfter(transaction[transaction.length - 1].timeStamp));
      //q = query(q, startAfter(lastVisible.timeStamp));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const withKey = {
              key: doc.id,
              ...doc.data(),
            };
            return withKey;
            //return doc.data();
          });
          setDataForCheckingNext(data);
          //here setTransaction data[]
          setTransaction(data.slice(0, itemLimit));
          setDataForCheckingNext(data?.length);
          setLoading(false);
          setPage(page + 1);
        },
        (error) => {
          setError(error);
        }
      );
    }
  };

  const showPrevious = () => {
    if (page > 1) {
      q = query(
        q,
        limitToLast(itemLimit + 1),
        endBefore(transaction[0].timeStamp)
      );
      //q = query(q, limitToLast(itemLimit), endBefore(firstVisible.timeStamp));
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            const withKey = {
              key: doc.id,
              ...doc.data(),
            };
            return withKey;
          });
          setTransaction(data.slice(-{ itemLimit }));

          //when prev successfully that means there is a next available
          setDataForCheckingNext(itemLimit + 1);
          setLoading(false);
          setPage(page - 1);
        },
        (error) => {
          setError(error);
        }
      );
    }
  };

  return {
    transaction,
    loading,
    error,
    page,
    showNext,
    showPrevious,
    dataForCheckingNext,
  };
}
