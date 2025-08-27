import React from "react";

export default function BottomSheet() {
  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/40">
      <div className="w-full max-w-md rounded-t-2xl bg-white shadow-lg p-4">
        <h2 className="text-lg font-bold mb-2">About</h2>
        <p className="text-sm text-gray-700">
          This is some about content. Replace it with your own.
        </p>
      </div>
    </div>
  );
}
