import { BiCheck } from "react-icons/bi";
import { BsFillInfoCircleFill, BsTrash3Fill } from "react-icons/bs";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TaskProps } from "./Task.type";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Task = ({ task, onTaskComplete, onEditTask }: TaskProps) => {
  const { id, title, start_date, end_date, completed, user } = task;
  const [taskCompleted, setTaskCompleted] = useState<boolean>(completed);

  const handleCompleteTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskCompleted((prev) => !prev);
    console.log(e.target.checked);

    onTaskComplete(id, !taskCompleted);
  };

  return (
    <div className="py-2">
      <div className="bg-primary text-secondary rounded-md shadow-lg px-4 py-2 max-w-sm">
        <div className="py-1 flex flex-row justify-between">
          <h2 className="font-semibold text-base">{title}</h2>
          <Link to={`note-type-${id}`}>
            <BsFillInfoCircleFill size={24} />
          </Link>
        </div>
        <div className="py-1 flex flex-row justify-between text-base items-center">
          <div className="flex flex-col">
            <span>Start date: {start_date}</span>
            {end_date && <span>End date: {end_date}</span>}
          </div>
          <MdOutlineNoteAlt
            size={24}
            className="cursor-pointer"
            onClick={onEditTask}
          />
        </div>
        <div className="py-1 flex flex-row justify-between items-center">
          <div>
            <label
              htmlFor={`task-${id}`}
              className="flex flex-row justify-center items-center cursor-pointer relative"
            >
              <input
                type="checkbox"
                id={`task-${id}`}
                className="appearance-none w-5 h-5 border-2 border-secondary rounded-md group"
                onChange={(e) => handleCompleteTask(e)}
                checked={taskCompleted}
              />
              <BiCheck
                size={22}
                className={`absolute left-[-1px] top-0 opacity-0 ${
                  taskCompleted ? "opacity-100 check-1" : "opacity-0"
                } `}
              />
              <span className="text-base ml-2">Mark as completed</span>
            </label>
          </div>
          <BsTrash3Fill size={24} className="cursor-pointer" />
        </div>
        <div className="py-1 flex flex-row text-sm justify-end">
          <span>Executive: </span>
          <span className="font-bold ml-1 italic">{user}</span>
        </div>
      </div>
    </div>
  );
};

export default Task;
