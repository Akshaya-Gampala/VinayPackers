
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, LogIn } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      sessionStorage.setItem("adminToken", data.token);
      sessionStorage.setItem("adminEmail", data.admin.email);

      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to connect to the server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <Lock size={30} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Vinay Packers and Movers
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Admin Email
            </label>

            <div className="flex items-center rounded-lg border border-slate-300 px-3">
              <Mail size={18} className="text-slate-400" />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="flex items-center rounded-lg border border-slate-300 px-3">
              <Lock size={18} className="text-slate-400" />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-60"
          >
            <LogIn size={18} />
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Authorized administrators only
        </p>
      </div>
    </div>
  );
}
