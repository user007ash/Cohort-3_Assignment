import React from 'react';

function Label({ label }) {
  return (
    <label className="text-sm text-neutral-300 block px-2 py-1">
      {label || "Default Label"}
    </label>
  );
}

export default Label;
