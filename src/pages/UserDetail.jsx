import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../services/api";
import Navbar from "../components/Navbar";
import BackgroundGlow from "../components/BackgroundGlow";
import Breadcrumb from "../components/BreadCrumb";
import UserDetailSkeleton from "../components/UserDetailSkeleton";

import { Mail, Phone, User, Building2, MapPin } from "lucide-react";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUser(data.find((u) => u.id === Number(id)));
      setLoading(false);
    });
  }, [id]);

  if (!user)
    return (
      <div className="flex items-center justify-center w-full max-w-6xl h-screen">
        <h1>User not found!</h1>
      </div>
    );

  return (
    <>
      <BackgroundGlow />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumb />

        {loading ? (
          <UserDetailSkeleton />
        ) : (
          <div
            className="p-6 md:p-8 rounded-2xl
                       bg-white/10 dark:bg-white/5
                       backdrop-blur-xl
                       border border-white/20 dark:border-white/10
                       shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                       transition space-y-6"
          >
            {/* 🔹 Header */}
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-sm text-slate-500">User Details Overview</p>
            </div>

            {/* 🔹 Info Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-indigo-500 mt-1" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="text-indigo-500 mt-1" />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User size={18} className="text-indigo-500 mt-1" />
                <div>
                  <p className="text-sm text-slate-400">Username</p>
                  <p className="font-medium">{user.username}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 size={18} className="text-indigo-500 mt-1" />
                <div>
                  <p className="text-sm text-slate-400">Company</p>
                  <p className="font-medium">{user.company.name}</p>
                </div>
              </div>
            </div>

            {/* 🔹 Address Section */}
            <div className="flex items-start gap-3 pt-4 border-t border-white/10">
              <MapPin size={18} className="text-indigo-500 mt-1" />
              <div>
                <p className="text-sm text-slate-400">Address</p>
                <p className="font-medium">
                  {user.address.street}, {user.address.city}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
