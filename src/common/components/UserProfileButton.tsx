import React from "react";

interface UserButtonProps {
  label?: string;
  onClick?: () => void;
}

const UserButton: React.FC<UserButtonProps> = ({ label = "User", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full flex justify-center items-center border border-gray-400 hover:cursor-pointer hover:bg-gray-200 transition"
    >
      <p className="text-sm font-medium m-0">{label}</p>
    </button>
  );
};

export default UserButton;
