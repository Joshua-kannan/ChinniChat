import { auth } from "@/firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

export default function AuthPage() {
  const onClick = () => {
    signInWithRedirect(auth, new GoogleAuthProvider());
  };

  return (
    <div className="page">
       <div className="container">
      <div className="logo">👋 💬 🤖</div>
      <div className="text">
        <h1>Welcome to Chinni Chat :)</h1>
      </div>
      <div className="text" style={{ paddingBottom: "16px" }}>
        <h3>
          <span className="white-text">Chinni-Chat is a free platform to meet and chat with people from all across the world.</span>
          <br />
          <span className="white-text">Log in or Sign Up using your google account to start Chatting. <br /> <br /> Chinni-chat is created by</span>
          <br />
          <span className="blue-text"> Joshua Kannan</span>
        </h3>
      </div>
      <button className="button" onClick={onClick}>
        Log In
      </button>
      <button className="button" onClick={onClick}>
        Sign Up
      </button>
      </div>
    </div>
  );
}