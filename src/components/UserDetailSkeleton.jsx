export default function UserDetailSkeleton() {
  return (
    <div className="container-app max-w-6xl border border-gray-300 dark:border-white/10 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="card p-6 animate-pulse space-y-4">
        {/* Name */}
        <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded" />

        {/* Basic Info */}
        <div className="space-y-2">
          <div className="h-4 w-64 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-48 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Company */}
        <div className="space-y-2 pt-2">
          <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-56 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>

        {/* Address */}
        <div className="space-y-2 pt-2">
          <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
          <div className="h-4 w-52 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
}
