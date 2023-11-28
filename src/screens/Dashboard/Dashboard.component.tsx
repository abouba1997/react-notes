import { tasks } from "../../utils/MockData/MockData";
import Task from "../../components/Task/Task.component";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import { TaskType } from "../../components/Task/Task.type";
import EditTask from "../EditTask/EditTask.component";
import OutsideClickHandler from "../../utils/OutsideClickHandler";

const Dashboard = () => {
  const [tasksData, setTasksData] = useState<TaskType[]>(tasks);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] =
    useState<boolean>(false);

  const handleEditTaskModalOpen = () => {
    setIsEditTaskModalOpen((prev) => !prev);
  };

  const handleTaskComplete = (taskId: number, completed: boolean) => {
    setTasksData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed,
              end_date: completed ? new Date().toLocaleDateString() : undefined,
            }
          : task
      )
    );
  };

  const runningTasks = tasksData.filter((task) => !task.completed);
  const completedTasks = tasksData.filter((task) => task.completed);

  console.log({ runningTasks });
  console.log({ completedTasks });

  return (
    <>
      <div className="bg-secondary flex-grow flex flex-col justify-center mx-3 w-full md:flex-row sm:max-w-6xl sm:mx-auto">
        <div className="w-1/2 px-4 sm:px-6 md:px-10 border-r-2 border-primary">
          <div className="pt-24 pb-10">
            <h1 className="text-2xl text-primary font-bold pb-2 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[128px] after:h-1 after:bg-primary">
              Running Tasks
            </h1>
          </div>
          {runningTasks.slice(0, 4).map((task) => (
            <Task
              key={`running-${task.id}`}
              task={task}
              onTaskComplete={handleTaskComplete}
            />
          ))}
          <div className="mt-6 flex justify-end md:justify-start">
            <Link
              to="/all-running-tasks"
              className="py-1 px-6 border-2 border-primary text-base text-primary flex items-center group transition-all duration-300"
            >
              All running tasks{" "}
              <BsArrowRightShort size={30} className="group-hover:pl-2" />
            </Link>
          </div>
        </div>
        <div className="w-1/2 px-4 sm:px-6 md:px-10 border-l-2 border-primary">
          <div className="pt-24 pb-10">
            <h1 className="text-2xl text-primary font-bold pb-2 relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[128px] after:h-1 after:bg-primary">
              Completed Tasks
            </h1>
          </div>
          {completedTasks.slice(0, 3).map((task) => (
            <Task
              key={`completed-${task.id}`}
              task={task}
              onTaskComplete={handleTaskComplete}
            />
          ))}
          <div className="mt-6 sm:mt-[6.65rem] flex justify-end md:justify-start">
            <Link
              to="/all-completed-tasks"
              className="py-1 px-6 border-2 border-primary text-base text-primary flex items-center group transition-all duration-300"
            >
              All Completed tasks{" "}
              <BsArrowRightShort size={30} className="group-hover:pl-2" />
            </Link>
          </div>
        </div>
      </div>
      {isEditTaskModalOpen && (
        <OutsideClickHandler onOutsideClick={handleEditTaskModalOpen}>
          <EditTask />
        </OutsideClickHandler>
      )}
    </>
  );
};

export default Dashboard;
