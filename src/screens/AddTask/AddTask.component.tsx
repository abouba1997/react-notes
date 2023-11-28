import { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineNoteAlt } from "react-icons/md";
import { TbSelect } from "react-icons/tb";
import { TaskType } from "../../components/Task/Task.type";

const AddTask = () => {
  const [formData, setFormData] = useState<TaskType>({
    title: "",
    priority: "Low",
    end_date: "",
    category: "Daily",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex rounded-2xl shadow-2xl w-full flex-col px-4 sm:px-10 items-center justify-center h-full">
      <div className="flex justify-center w-full">
        <h1 className="bg-primary/60 text-white max-w-2xl rounded-md shadow-2xl w-full py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
          Create your task
        </h1>
      </div>
      <div className="text-primary flex justify-center mt-5 w-full">
        <form className="max-w-2xl w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-between md:pt-5">
            <div className="flex flex-col md:w-1/2 md:pr-2 pt-3 md:pt-0">
              <label htmlFor="task-title" className="text-base pb-1">
                Task title
              </label>
              <div className="flex relative w-full">
                <input
                  type="text"
                  name="title"
                  id="task-title"
                  placeholder="Task title"
                  onChange={handleChange}
                  className="text-base px-3 py-2 rounded-md bg-secondary focus:outline-none text-primary border-2 border-primary w-full"
                />
                <MdOutlineNoteAlt
                  size={20}
                  className="absolute top-[50%] translate-y-[-50%] right-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-2 pt-3 md:pt-0">
              <label htmlFor="task-priority-level" className="text-base pb-1">
                Priority level
              </label>
              <div className="flex relative w-full">
                <select
                  id="task-priority-level"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="text-base px-3 py-2 rounded-md bg-secondary focus:outline-none text-primary border-2 border-primary w-full appearance-none cursor-pointer"
                >
                  <option
                    defaultChecked
                    className="font-semibold"
                    value="option1"
                  >
                    Low
                  </option>
                  <option className="font-semibold" value="option2">
                    Medium
                  </option>
                  <option className="font-semibold" value="option3">
                    High
                  </option>
                </select>
                <TbSelect
                  size={20}
                  className="absolute top-[50%] translate-y-[-50%] right-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:pt-5">
            <div className="flex flex-col md:w-1/2 md:pr-2 pt-3 md:pt-0">
              <label htmlFor="task-end-date" className="text-base pb-1">
                Task End Date
              </label>
              <div className="flex relative w-full">
                <input
                  type="date"
                  name="end_date"
                  id="task-end-date"
                  placeholder="Task End Date"
                  value={formData.end_date}
                  onChange={handleChange}
                  className="text-base px-3 py-2 rounded-md bg-secondary focus:outline-none text-primary border-2 border-primary w-full cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-2 pt-3 md:pt-0">
              <label htmlFor="task-category" className="text-base pb-1">
                Category
              </label>
              <div className="flex relative w-full">
                <select
                  id="task-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="text-base px-3 py-2 rounded-md bg-secondary focus:outline-none text-primary border-2 border-primary w-full appearance-none  cursor-pointer"
                >
                  <option
                    defaultChecked
                    className="font-semibold text-base"
                    value="option1"
                  >
                    Daily Task
                  </option>
                  <option className="font-semibold" value="option2">
                    Weekly Task
                  </option>
                  <option className="font-semibold" value="option3">
                    Monthly Task
                  </option>
                  <option className="font-semibold" value="option3">
                    One-Time Task
                  </option>
                  <option className="font-semibold" value="option3">
                    Work Task
                  </option>
                  <option className="font-semibold" value="option3">
                    Personal Task
                  </option>
                </select>
                <TbSelect
                  size={20}
                  className="absolute top-[50%] translate-y-[-50%] right-2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between md:pt-5 pt-3">
            <div className="flex flex-col w-full">
              <label htmlFor="task-info-desc" className="text-base pb-1">
                Task description and information
              </label>
              <div className="flex relative w-full">
                <textarea
                  rows={5}
                  id="task-info-desc"
                  placeholder="Description and information about the task"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="text-base px-3 py-2 rounded-md bg-secondary focus:outline-none text-primary border-2 border-primary w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center items-center mt-8">
            <button
              type="submit"
              className="py-2 border-2 text-secondary bg-primary rounded-md w-full hover:bg-secondary hover:text-primary hover:border-primary transition-all duration-300"
            >
              Add to list
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
