export type TaskPriorityLevel = "Low" | "Medium" | "High";

export type TaskCategoryType =
  | "Daily"
  | "Weekly"
  | "Monthly"
  | "One-Time"
  | "Work"
  | "Personal";

export type TaskType = {
  id?: number;
  title: string;
  start_date?: string;
  end_date?: string;
  completed?: boolean;
  user?: string;
  priority?: TaskPriorityLevel;
  category?: TaskCategoryType;
  description?: string;
};

export type TaskStatusType = "running" | "completed";

export type TaskProps = {
  task: TaskType;
  type?: TaskStatusType;
  onTaskComplete: (taskId: number, completed: boolean) => void;
  onEditTask: (task: TaskType) => void;
};
