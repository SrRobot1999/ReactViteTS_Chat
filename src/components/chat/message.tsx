import { cn } from "@/lib/utils";

interface MessageProps {
  message: string;
  time: string;
  photoURL: string;
  isCurrentUser: boolean;
}

const Message = ({ message, time, photoURL, isCurrentUser }: MessageProps) => {
  return (
    <article
      className={cn("flex gap-x-2", {
        "flex-row-reverse": isCurrentUser,
        "flex-row": !isCurrentUser,
      })}
    >
      <img src={photoURL} alt="" className="rounded-full size-7" />
      <div
        className={cn("rounded-md p-2 text-gray-700 max-w-[70%]", {
          "bg-green-100": isCurrentUser,
          "bg-white": !isCurrentUser,
        })}
      >
        <p>{message}</p>
        <p className="text-right text-xs">{time}</p>
      </div>
    </article>
  );
};
export default Message;
