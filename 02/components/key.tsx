import React from "react";

export default function Key({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-md bg-white shadow-sm shadow-neutral-400 active:bg-neutral-100">
      <div className="mt-0.5 h-12 w-12.5 rounded-md bg-neutral-100">
        <div className="flex h-full w-full flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
