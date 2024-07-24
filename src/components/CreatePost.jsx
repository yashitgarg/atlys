import React from "react";
import EmojiIcon from "./EmojiIcon";

const CreatePost = ({ inputHeight }) => {
  return (
    <div
      className="bg-[#1E1F24] p-4 rounded-lg mb-4 border-2 border-[#35373B]"
      style={{ width: "700px", height: "223px" }}
    >
      <p className="text-[#C5C7CA] text-[18px] font-medium leading-[21.78px] mb-4">
        Create post
      </p>
      <div
        className="relative bg-[#191920] rounded-lg p-3 flex items-center"
        style={{ height: "78px" }}
      >
        <EmojiIcon emoji="💬" className="mr-3" />
        <textarea
          className="w-full bg-[#191920] text-[#7F8084] rounded-lg px-4 py-2 focus:outline-none resize-none"
          placeholder="How are you feeling today?"
          style={{ height: "48px" }}
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          style={{ width: "111px", height: "43px" }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
