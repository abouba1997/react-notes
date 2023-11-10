import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Root = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex w-full h-full bg-secondary text-xl">
        <div className="flex h-full w-full flex-col md:flex-row">
          <Sidebar />
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Root;
