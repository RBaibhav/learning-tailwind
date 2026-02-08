import React from "react";

export default function Key({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex items-center active:bg-neutral-100  justify-center cursor-pointer bg-white rounded-md shadow-sm shadow-neutral-400">
      <div className="mt-0.5 bg-neutral-100 rounded-md w-12.5 h-12">
        <div className="flex flex-col justify-center h-full w-full items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
