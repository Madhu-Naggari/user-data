import { Users } from "lucide-react";
import ThemeToggle from "./ToggleTheme";

export default function Navbar() {
  return (
    <div className="m-4">
      <div className="sticky max-w-7xl mx-auto top-3 rounded-2xl z-50 px-6 py-4 flex justify-between items-center bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 shadow-sm">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <Users size={20} />
          User Dashboard
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
}
