import React, { useId } from 'react';

function Button({ label }) {
  const id = useId();
  return (
    <button
      id='id.labael'
      type="button"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
    >
      {label || "Click Me"}
    </button>
  );
}

export default Button;
