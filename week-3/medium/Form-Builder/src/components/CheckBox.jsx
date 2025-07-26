import React, { useId } from "react";

function CheckBox({ label }) {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <input id={id} type="checkbox" className="accent-blue-600 w-4 h-4" />
      <label htmlFor={id} className="text-sm text-neutral-300">
        {label || "Check me"}
      </label>
    </div>
  );
}

export default CheckBox;
