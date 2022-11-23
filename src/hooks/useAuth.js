import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState('');
  const auth = getAuth();
  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      (error) => {
        setError(error);
        console.log(error);
      }
    );
    return unsubscribe;
  }, []);

  const updateUser = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name ? name : currentUser.displayName,
      photoURL: photoURL ? photoURL : currentUser.photoURL,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };
  return { loading, currentUser, updateUser };
};

export default useAuth;
