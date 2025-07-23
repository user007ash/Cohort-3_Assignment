import React from "react";

function Loading() {
  return (
    <div className="p-1 bg-transparent flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;
