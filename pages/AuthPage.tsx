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
        <h3>Log in with your account to continue</h3>
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
