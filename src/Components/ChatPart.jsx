import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const ChatPart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/call");
  };
  return (
    <div className=" fixed bottom-4 right-4 z-50">
      <button
        onClick={handleClick}
        className=" bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 focus:outline-none
      focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      >
        <TbPhoneCall />
      </button>
    </div>
  );
};

export default ChatPart;
