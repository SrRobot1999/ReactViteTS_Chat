import { Button } from "@/components/ui/button";
import { BsEmojiSmileFill } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

const MessagesFooter = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };
  const handleSendMessage = () => {
    if (!message) return;

    //send message
    console.log(message);

    //clear the input
    setMessage("");
    setShowEmojiPicker(false);
  };

  return (
    <footer className="border-t p-4 flex gap-x-2">
      <div className="relative">
        <Button onClick={() => setShowEmojiPicker((prev) => !prev)}>
          <BsEmojiSmileFill className="text-xs" />
        </Button>
        <div className="absolute bottom-12">
          <EmojiPicker open={showEmojiPicker} onEmojiClick={onEmojiClick} />
        </div>
      </div>

      <Input
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </footer>
  );
};
export default MessagesFooter;
