const FriendItem = () => {
  return (
    <article className="flex items-center gap-x-3 py-2 px-2 border-b hover:bg-pink-100 cursor-pointer">
      <img
        src="https://randomuser.me/api/portraits/women/19.jpg"
        alt=""
        className="w-14 h-14 rounded-full"
      />
      <div>
        <h3 className="font-semibold">Vania</h3>
        <p className="text-xs text-gray-500">Lorem, ipsum dolor.</p>
      </div>
    </article>
  );
};
export default FriendItem;
