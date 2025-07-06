import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function ProfileLayout() {
  return (
    <main className="container mx-auto mb-16 mt-5 flex flex-col rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 lg:flex-row">
      <SideBar />
      <Outlet />
    </main>
  );
}
