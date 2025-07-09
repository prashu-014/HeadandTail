import { Outlet } from "react-router-dom";
import Navigation from "../component/Navigation";

const Layout = () => {
  return (
    <div className="flex flex-col h-svh md:h-screen">
      <Navigation />

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
