import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.type";
import { Task, TasksState } from "./tasksSlice.type";
import { tasks } from "../../../utils/MockData/MockData";

const initialState: TasksState = {
  tasks: [...tasks],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    setTaskCompleted: (
      state,
      action: PayloadAction<{ taskId: number; completed: boolean }>
    ) => {
      const { taskId, completed } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.completed = !completed;
        taskToUpdate.end_date = completed
          ? new Date().toLocaleDateString()
          : undefined;
      }
    },
  },
});

export const { addTask, setTaskCompleted } = tasksSlice.actions;
export default tasksSlice.reducer;

export const selectTasks = (state: RootState) => state.tasks.tasks;
