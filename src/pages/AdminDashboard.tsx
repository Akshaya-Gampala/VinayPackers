
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Image,
  Star,
  LogOut,
  Users,
} from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const adminToken = sessionStorage.getItem("adminToken");
  const adminEmail = sessionStorage.getItem("adminEmail");

  if (!adminToken) {
    navigate("/admin", { replace: true });
    return null;
  }

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminEmail");
    navigate("/admin", { replace: true });
  };

  const sections = [
    {
      title: "Customer Enquiries",
      description: "View and manage customer enquiries and their status.",
      icon: ClipboardList,
      action: "Manage Enquiries",
    },
    {
      title: "Gallery Management",
      description: "Add, update and delete your work photographs.",
      icon: Image,
      action: "Manage Gallery",
    },
    {
      title: "Customer Reviews",
      description: "Review, approve and manage customer feedback.",
      icon: Star,
      action: "Manage Reviews",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-blue-800 px-6 py-5 text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">
              Vinay Packers and Movers
            </h1>
            <p className="mt-1 text-sm text-blue-100">
              Administration Dashboard
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-3 text-blue-700">
              <LayoutDashboard size={25} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Welcome to Admin Dashboard
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Logged in as {adminEmail || "Administrator"}
              </p>
            </div>
          </div>
        </div>

        <h2 className="mb-5 text-lg font-bold text-slate-800">
          Website Management
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-700">
                  <Icon size={26} />
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {section.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-slate-600">
                  {section.description}
                </p>

                <p className="text-sm font-semibold text-blue-700">
                  {section.action} — Coming next
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-5">
          <div className="flex items-center gap-3">
            <Users className="text-blue-700" size={24} />
            <div>
              <h3 className="font-semibold text-slate-800">
                Admin access
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Use this dashboard to manage your website. Management features
                will be connected in the next steps.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
