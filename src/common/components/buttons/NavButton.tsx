import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  to?: string; // If provided, renders a <Link>
  onClick?: () => void; // Optional click handler
  children: ReactNode; // Button text or icon
  className?: string; // Optional additional styles
}

const NavButton = ({
  to,
  onClick,
  children,
  className = "",
}: NavButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={`${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${className} text-pink-400`}>
      {children}
    </button>
  );
};

export default NavButton;
