import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleTransactionBody from '../component/TransactionPage/SingleTransactionBody';
import LoaderSpin from '../component/ui/LoaderSpin';

const SingleTransaction = () => {
  const { id } = useParams();
  const db = getFirestore();
  const docRef = doc(db, 'transaction', id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  let content;

  if (loading) content = <LoaderSpin />;
  if (!loading && error)
    content = <h1 className="x text-red-600 text-xl">{error.message}</h1>;
  if (!loading && !error && data)
    content = (
      <div className="bg-background text-textPrimary rounded-md sub-section flex flex-col gap-5 md:gap-10">
        <SingleTransactionBody data={data} />
      </div>
    );
  if (!loading && !error && !data) content = <h2>No Data Found</h2>;
  useEffect(() => {
    const fetchDoc = async () => {
      try {
        setLoading(true);
        const docSnap = await getDoc(docRef);
        const fetchData = docSnap.data();
        setData(fetchData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchDoc();

    return fetchDoc;
  }, []);

  return (
    <div className="section bg-background/90 text-textPrimary min-h-screen">
      {content}
    </div>
  );
};

export default SingleTransaction;
