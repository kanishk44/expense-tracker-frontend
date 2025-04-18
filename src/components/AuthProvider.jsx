import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "../firebaseConfig";
import { restoreSession } from "../store/slices/authSlice";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get the ID token
          const token = await user.getIdToken();

          // Fetch premium status from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const isPremium = userDoc.exists() ? userDoc.data().isPremium : false;

          // Restore the session
          dispatch(restoreSession({ user, token, isPremium }));
        } catch (error) {
          console.error("Error restoring session:", error);
        }
      } else {
        // User is signed out
        dispatch(restoreSession({ user: null, token: null, isPremium: false }));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return children;
}
