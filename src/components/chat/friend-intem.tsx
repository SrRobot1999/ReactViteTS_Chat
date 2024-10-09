interface FriendItemsProps {
  //uid: string;
  displayName: string;
  photoURL: string;
  lastMessage: string;
}

const FriendItem = ({
  displayName,
  photoURL,
  lastMessage,
}: FriendItemsProps) => {
  return (
    <article className="flex items-center gap-x-3 py-2 px-2 border-b hover:bg-pink-100 cursor-pointer">
      <img src={photoURL} alt="" className="w-14 h-14 rounded-full" />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold">{displayName}</h3>
        <p className="text-xs text-gray-500 truncate">{lastMessage}</p>
      </div>
    </article>
  );
};
export default FriendItem;
