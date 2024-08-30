import FriendItem from "./friend-intem";
import FriendSearch from "./friends-search";

const Friends = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <section className="border-b p-4">
        <h2 className="text-x1 font-bold text-gray-700 mb-4">Chats</h2>
        <FriendSearch />
      </section>
      <section className="custom-scrollbar">
        {Array.from({ length: 10 }).map((_, i) => (
          <FriendItem key={i} />
        ))}
      </section>
    </div>
  );
};
export default Friends;
