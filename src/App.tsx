import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Root from "./layout/Root";
import CompletedTasks from "./screens/CompletedTasks";
import RunningTasks from "./screens/RunningTasks";
import AddTask from "./screens/AddTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="add-task" element={<AddTask />} />
      <Route path="all-completed-tasks" element={<CompletedTasks />} />
      <Route path="all-running-tasks" element={<RunningTasks />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
