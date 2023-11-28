export interface Task {
  id: number;
  title: string;
  completed: boolean;
  start_date: Date | string;
  end_date?: string;
  user: string;
}

export interface TasksState {
  tasks: Task[];
}
