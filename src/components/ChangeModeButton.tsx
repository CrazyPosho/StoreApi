import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

interface ChangeModeButtonProps {
  onClick?: () => void;
  isDarkMode: boolean;
}

export const ChangeModeButton = ({
  onClick,
  isDarkMode,
}: ChangeModeButtonProps) => {
  return (
    <button onClick={onClick} className={`rounded-md p-3 cursor-pointer`}>
      {isDarkMode ? <FaSun /> : <FaRegMoon />}
    </button>
  );
};
