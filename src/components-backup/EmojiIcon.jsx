import React from "react";

const EmojiIcon = ({ emoji }) => {
  return (
    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-[#27292D]">
      <span
        className="text-lg"
        style={{ fontSize: "18px", lineHeight: "18px" }}
      >
        {emoji}
      </span>
    </div>
  );
};

export default EmojiIcon;
