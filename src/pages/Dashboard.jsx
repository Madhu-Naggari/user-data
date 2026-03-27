import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import UserTable from "../components/UserTable";
import TableSkeleton from "../components/TableSkeleton";
import BackgroundGlow from "../components/BackgroundGlow";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA =
      sortConfig.key === "company" ? a.company.name : a[sortConfig.key];
    const valB =
      sortConfig.key === "company" ? b.company.name : b[sortConfig.key];

    return sortConfig.direction === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="overflow-hidden h-screen w-screen">
      <BackgroundGlow />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-sm mb-4 text-slate-500">Manage users easily</p>

        <SearchBar search={search} setSearch={setSearch} />

        {loading ? (
          <TableSkeleton />
        ) : (
          <UserTable users={sorted} onSort={handleSort} />
        )}
      </div>
    </div>
  );
}
