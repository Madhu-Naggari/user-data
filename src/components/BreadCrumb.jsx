import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, Home } from "lucide-react";

export default function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <div className="container-app text-sm mb-4">
      <div className="flex items-center gap-1 text-gray-500">
        <Link to="/" className="flex items-center gap-1 hover:text-(--accent)">
          <ChevronLeft size={14} />
          <Home size={14} />
          Home
        </Link>

        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <div key={to} className="flex items-center gap-2">
              {isLast ? (
                <>
                  <ChevronLeft size={14} />

                  <span className="text-(--text-strong) capitalize">
                    {value}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
