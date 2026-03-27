import { ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserTable({ users, onSort }) {
  const navigate = useNavigate();

  return (
    <div
      className="mt-4 overflow-x-auto rounded-xl
                    bg-white/10 dark:bg-white/5
                    backdrop-blur-xl
                    border border-gray-300 dark:border-white/10
                    shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                    hover:shadow-[0_5px_40px_rgba(124,58,237,0.10)]
                    transition max-h-150 overflow-y-auto"
    >
      <table className="w-full min-w-175 table-fixed text-sm">
        <thead className="bg-white/30 dark:bg-white/5 backdrop-blur-md">
          <tr>
            <th
              onClick={() => onSort("name")}
              className="p-3 w-[20%] text-left cursor-pointer"
            >
              <div className="flex items-center gap-1">
                Name <ArrowUpDown size={14} className="opacity-70" />
              </div>
            </th>

            <th className="p-3 w-[35%] text-left">Email</th>

            <th className="p-3 w-[25%] text-left">Phone</th>

            <th
              onClick={() => onSort("company")}
              className="p-3 w-[20%] text-left cursor-pointer"
            >
              <div className="flex items-center gap-1">
                Company <ArrowUpDown size={14} className="opacity-70" />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className="border-b border-white/10 hover:bg-gray-100 hover:dark:bg-white/10 cursor-pointer transition active:scale-[0.99]"
            >
              <td className="p-3 font-medium truncate">{user.name}</td>
              <td className="p-3 truncate">{user.email}</td>
              <td className="p-3 truncate">{user.phone}</td>
              <td className="p-3 truncate">{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
