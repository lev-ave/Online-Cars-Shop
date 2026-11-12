import { NavLink, Outlet, useLocation } from "react-router";
import Header from "./Header";

function DashboardLayout({cartLength}) {
      const location = useLocation();
      console.log(location);
      
      const getLinkClass = ({ isActive }) =>
        `block rounded-lg px-4 py-2 transition-colors ${
          isActive
            ? "bg-[#3e0000] font-semibold text-white"
            : "text-[#3e0000] hover:bg-white"
        }`;

  return (
    <div className="min-h-screen bg-[#3e0000]">
        <Header cart={cartLength}/>
        <div className="mx-auto grid max-w-6xl gap-6 p-6 md:grid-cols-[220px_1fr]">
            <aside className="rounded-xl bg-white p-4 shadow-sm">
            <nav className="flex flex-col gap-2">
                <NavLink to="/dashboard" end className={getLinkClass}> Dashboard </NavLink>
                <NavLink to="/dashboard/profile" className={getLinkClass}> Profile </NavLink>
                <NavLink to="/dashboard/settings" className={getLinkClass}> Settings </NavLink>
            </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    </div>
  );
}

export default DashboardLayout;