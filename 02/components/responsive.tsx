export default function Responsive() {
  return (
    <div className="flex flex-col items-center gap-10 md:flex-row">
      <div className="h-40 w-40 rounded-2xl bg-neutral-200"></div>
      <div className="h-40 w-40 rounded-2xl bg-red-200"></div>
      <div className="h-40 w-40 rounded-2xl bg-blue-200"></div>
    </div>
  );
}
