import { ReactNode } from "react";

export const ActionButton = ({
  icon,
  onClick,
  disabled = false,
}: {
  icon: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer hover:opacity-70 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
