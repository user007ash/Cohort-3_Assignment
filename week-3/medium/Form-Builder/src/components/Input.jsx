import { useId } from "react";

function Input({ label }) {
  const id = useId();
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      {label && <label htmlFor={id} className="text-sm text-neutral-300">{label}</label>}
      <input
        id={id}
        type="text"
        className="w-full px-3 py-2 rounded-md bg-neutral-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text"
      />
    </div>
  );
}

export default Input;