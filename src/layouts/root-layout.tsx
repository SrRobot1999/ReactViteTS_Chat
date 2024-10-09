import { useUser } from "reactfire";
import AuthLayout from "./auth-layout";
import ChatLayout from "./chat-layout";

const RootLayout = () => {
  const { status, data: user } = useUser();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  console.log({ user });

  return <div className="">{user ? <ChatLayout /> : <AuthLayout />} </div>;
};
export default RootLayout;
