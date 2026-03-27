export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-25 left-25 w-100 h-100 bg-purple-400 opacity-20 blur-[120px] rounded-full" />
    </div>
  );
}
