import { Link } from "react-router-dom";
import { FaTachometerAlt, FaList, FaCheckCircle, FaPlus } from "react-icons/fa";
import SidebarIcon from "../SidebarIcon";

const Sidebar = () => {
  return (
    <aside className="md:w-16 bg-primary text-white px-4 flex md:justify-start flex-row md:flex-col justify-around">
      <div className="h-16 flex items-center justify-center">
        <Link to="/" data-tip="Dashboard">
          <SidebarIcon icon={<FaTachometerAlt size={24} />} text="Dashboard" />
        </Link>
      </div>
      <div className="h-16 flex items-center justify-center">
        <Link to="/all-tasks" data-tip="All Tasks">
          <SidebarIcon icon={<FaList size={24} />} text="All Tasks" />
        </Link>
      </div>
      <div className="h-16 flex items-center justify-center">
        <Link to="/completed-tasks" data-tip="Completed Tasks">
          <SidebarIcon
            icon={<FaCheckCircle size={24} />}
            text="Completed Tasks"
          />
        </Link>
      </div>
      <div className="h-16 flex items-center justify-center">
        <Link to="/add-task" data-tip="Add Task">
          <SidebarIcon icon={<FaPlus size={24} />} text="Add Task" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
