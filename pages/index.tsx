import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { auth } from "@/firebase";
import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

export default function Home() {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (user === undefined) {
    return <div>Loading...; </div>
  } else if (user === null) {
    return <AuthPage />
  } else {
    console.log("User object:", user); // Log user object to check its properties
    return <ChatsPage user={user} />;
  }
}
