import FriendItem from "./friend-intem";
import FriendSearch from "./friends-search";
import { useEffect, useState } from "react";

interface Friend {
  uid: string;
  displayName: string;
  photoURL: string;
  lastMessage: string;
}

const Friends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const { results } = await res.json();

      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = results.map((user: any) => ({
        uid: user.login.uuid,
        displayName: user.name.first,
        photoURL: user.picture.large,
        lastMessage: "Hola equipo Fusertech estamos creciendo de a poco",
      }));
      setFriends(data);
    };
    getFriends();
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen border-r">
      <section className="border-b p-4">
        <h2 className="text-x1 font-bold text-gray-700 mb-4">Chats</h2>
        <FriendSearch />
      </section>
      <section className="custom-scrollbar">
        {friends.map((friend) => (
          <FriendItem
            key={friend.uid}
            displayName={friend.displayName}
            photoURL={friend.photoURL}
            lastMessage={friend.lastMessage}
          />
        ))}
      </section>
    </div>
  );
};
export default Friends;
