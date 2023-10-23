import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
      <div className="logo">👋 💬 🤖 </div>
      <div className="text"><h1>Welcome to Chinni Chat :)</h1></div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        <h3>Chinni-Chat is a free platform to meet and chat with people from all across the world. Log in or Signup using your google account to start Chatting.

Chinni-chat is created by Joshua Kannan</h3>
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button> 
      <button className="button" onClick={onClick}>
        Sign Up
      </button>
    </div>
  );
}
