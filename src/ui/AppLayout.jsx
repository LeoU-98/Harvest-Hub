import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className="bg-[#e4e4e7]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
