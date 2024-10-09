import { Button } from "@/components/ui/button";

const MessagesHeader = () => {
  return (
    <header className="border-b p-4 flex items-center gap-x-4">
      <img
        src="https://randomuser.me/api/portraits/women/40.jpg"
        alt=""
        className="size-20 rounded-md"
      />
      <div className="">
        <p className="text-lg font-semibold text-gray-700">Name friend</p>
        <p className="text-xs text-gray-500">Status</p>
      </div>
      <div className="ml-auto">
        <Button>Close chat</Button>
      </div>
    </header>
  );
};
export default MessagesHeader;
