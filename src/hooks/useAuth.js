import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const auth = getAuth();
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return { loading, currentUser };
};

export default useAuth;
