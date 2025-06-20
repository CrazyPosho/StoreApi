interface InputsProps {
  label: string | React.ReactNode;
  type: "text" | "number";
  message: string;
  state: "error" | "success" | "normal";
}

const sizeClasses: Record<NonNullable<InputsProps["state"]>, string> = {
  normal: "black",
  error: "red-500",
  success: "green-400",
};
export const Inputs = ({ label, type, message, state }: InputsProps) => {
  return (
    <div className="flex flex-col container p-5 text-center w-[50%]">
      <label className={`font-bold text-${sizeClasses[state]} `}>{label}</label>
      <input
        type={type}
        className={`border-${sizeClasses[state]} border-2  `}
        placeholder="Escribe tu nombre"
      />
      <p className={`text-${sizeClasses[state]} font-black`}>{message}</p>
    </div>
  );
};
