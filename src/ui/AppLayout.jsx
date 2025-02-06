import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

function AppLayout() {
  return (
    <div className="bg-[url(/grayBack.jpg)]">
      {/* <div className="bg-[url(/grayBack.jpg)]"> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
