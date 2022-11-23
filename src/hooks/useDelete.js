import { deleteDoc, doc, getFirestore } from 'firebase/firestore';

const useDelete = () => {
  const db = getFirestore();

  const deleteTransaction = async (key) => {
    await deleteDoc(doc(db, 'transaction', key));
  };
  return { deleteTransaction };
};

export default useDelete;
