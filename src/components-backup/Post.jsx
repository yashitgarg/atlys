import React from "react";
import { MoreHorizontal, MessageSquare } from "lucide-react";
import EmojiIcon from "./EmojiIcon";

const Post = ({
  avatar,
  name,
  time,
  content,
  comments,
  emoji,
  edited,
  onClick,
}) => {
  return (
    <div
      className="bg-[#27292D] rounded-lg p-4 mb-4 cursor-pointer border-2 border-[#35373B]"
      style={{ width: "700px" }}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={name}
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <div>
            <h3 className="text-[#C5C7CA] font-semibold text-[18px] leading-[21.78px]">
              {name}
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              {time} {edited && <span>• Edited</span>}
            </p>
          </div>
        </div>
        <MoreHorizontal className="text-gray-400 cursor-pointer" size={20} />
      </div>
      <div className="bg-[#191920] p-4 rounded-lg mb-2 flex items-start">
        <EmojiIcon emoji={emoji} className="mr-2 flex-shrink-0 mt-[3px]" />
        <p className="text-[#7F8084] ml-3">{content}</p>
      </div>
      <div className="flex items-center text-gray-400 text-xs">
        <MessageSquare size={16} className="mr-1" />
        <span>{comments} comments</span>
      </div>
    </div>
  );
};

export default Post;
