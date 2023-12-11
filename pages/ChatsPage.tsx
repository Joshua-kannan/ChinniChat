import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";

interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <button
        style={{ position: "absolute", top: "20px", left: "20px", zIndex: 6 }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="001dd838-acae-487c-a7a6-02701c6ef95c"
        username={props.user?.email || ''}
        secret={props.user?.uid || ''}
        style={{ height: "100%" }}
      />
    </div>
  );
}
