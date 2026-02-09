import Key from "./key";

const functionKeys = [
  { name: "F1", path: "/icons/f1.svg" },
  { name: "F2", path: "/icons/f2.svg" },
  { name: "F3", path: "/icons/f3.svg" },
  { name: "F4", path: "/icons/f4.svg" },
  { name: "F5", path: "/icons/f5.svg" },
  { name: "F6", path: "/icons/f6.svg" },
  { name: "F7", path: "/icons/f7.svg" },
  { name: "F8", path: "/icons/f8.svg" },
  { name: "F9", path: "/icons/f9.svg" },
  { name: "F10", path: "/icons/f10.svg" },
  { name: "F11", path: "/icons/f11.svg" },
  { name: "F12", path: "/icons/f12.svg" },
];

export default function Keyboard() {
  return (
    <div className="min-h-90 w-full max-w-4xl px-8">
      <div className="min-h-90 rounded-3xl bg-stone-200 p-3 text-neutral-700">
        {/* Top Row */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-center rounded-md rounded-tl-2xl bg-white shadow-sm shadow-neutral-400">
            <div className="relative mt-0.5 rounded-md rounded-tl-2xl bg-neutral-100 px-12 py-6">
              <div className="absolute bottom-1 left-2 text-xs text-neutral-700">
                esc
              </div>
            </div>
          </div>
          {functionKeys.map((key, index) => {
            return (
              <Key key={index}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="text-xs"> o</div>
                  <div className="text-[9.5px] text-neutral-700">
                    {key.name}
                  </div>
                </div>
              </Key>
            );
          })}
          <div className="flex items-center justify-center rounded-md rounded-tr-2xl bg-white shadow-sm shadow-neutral-400">
            <div className="mt-0.5 rounded-md rounded-tr-2xl bg-neutral-50">
              <div className="m-2 mx-2.5 rounded-4xl border-2 border-neutral-300 p-3.5 shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
