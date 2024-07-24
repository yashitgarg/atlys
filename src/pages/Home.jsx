import React, { useState } from "react";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import user1 from "../assets/user_1.png";
import user2 from "../assets/user_2.png";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#131517] text-[#7F8084]">
      <main className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-[28px] font-medium leading-[33.89px] text-[#C5C7CA] mb-2">
          Hello Jane
        </h2>
        <p className="text-[#7F8084] mb-6 text-base leading-6 font-inter text-left max-w-[580px]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <CreatePost inputHeight="78px" />
        <Post
          avatar={user1}
          name="Theresa Webb"
          time="5mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          comments={24}
          emoji="👋"
          onClick={handlePostClick}
        />
        <Post
          avatar={user2}
          name="Marvin McKinney"
          time="8mins ago"
          content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          comments={0}
          emoji="😞"
          edited
          onClick={handlePostClick}
        />
      </main>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Home;
