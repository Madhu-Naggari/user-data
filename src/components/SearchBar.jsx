import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-700 z-30"
        size={16}
      />

      <input
        className="w-full pl-10 pr-4 py-2 rounded-lg
                   bg-white/10 dark:bg-white/5
                   border border-gray-300 dark:border-white/10
                   backdrop-blur-xl
                   outline-none
                   focus:ring-2 focus:ring-indigo-500/30
                   transition"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
