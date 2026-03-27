export default function TableSkeleton() {
  return (
    <div
      className="mt-4 rounded-xl overflow-hidden
                    bg-white/10 dark:bg-white/5 backdrop-blur-xl
                    border border-white/20 dark:border-white/10"
    >
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex gap-8 p-4 border-b border-white/10">
          <div className="h-4 w-48 bg-white/20 dark:bg-white/10 animate-pulse rounded" />
          <div className="h-4 w-52 bg-white/20 dark:bg-white/10 animate-pulse rounded" />
          <div className="h-4 w-28 bg-white/20 dark:bg-white/10 animate-pulse rounded" />
          <div className="h-4 w-48 bg-white/20 dark:bg-white/10 animate-pulse rounded" />
        </div>
      ))}
    </div>
  );
}
