import React, { useId } from 'react';


function RadioButton({ label }) {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name="radioGroup"
        className="accent-blue-600"
      />
      <label htmlFor={id} className="text-sm text-neutral-300">
        {label || "Select me"}
      </label>
    </div>
  );
}

export default RadioButton;
