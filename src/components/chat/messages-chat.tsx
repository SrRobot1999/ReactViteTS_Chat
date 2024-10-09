import { useEffect, useRef } from "react";
import Message from "./message";

const MessagesChat = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  console.log(containerRef);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-indigo-100 p-4 space-y-2 custom-scrollbar"
    >
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/40.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo excepturi nesciunt sunt, repudiandae inventore
            consequatur, natus quod dolor, illo laboriosam molestias saepe
            autem. Odit modi culpa voluptate fugiat illum."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/40.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo excepturi nesciunt sunt, repudiandae inventore
            consequatur, natus quod dolor, illo laboriosam molestias saepe
            autem. Odit modi culpa voluptate fugiat illum."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/40.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo excepturi nesciunt sunt, repudiandae inventore
            consequatur, natus quod dolor, illo laboriosam molestias saepe
            autem. Odit modi culpa voluptate fugiat illum."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/40.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo excepturi nesciunt sunt, repudiandae inventore
            consequatur, natus quod dolor, illo laboriosam molestias saepe
            autem. Odit modi culpa voluptate fugiat illum."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/40.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo excepturi nesciunt sunt, repudiandae inventore
            consequatur, natus quod dolor, illo laboriosam molestias saepe
            autem. Odit modi culpa voluptate fugiat illum."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={true}
      />
    </main>
  );
};
export default MessagesChat;
