import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component";
import Sidebar from "../../components/Sidebar";

const Root = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex w-full h-full bg-secondary text-xl">
        <div className="flex h-full">
          <Sidebar />
          <div className="flex justify-center items-center w-full">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Root;
