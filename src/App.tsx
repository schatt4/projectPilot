// import ProjectsPage from "./projects/ProjectsPage";
import Dashboard from "./pages/Dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import CourseGoal from "./pages/CourseGoal";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      errorElement: <div>Error</div>,
      element: <Layout />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "/goals", element: <CourseGoal /> },
      ],
    },
  ]);

  return (
    <>
      {/* <ProjectsPage /> */}
      {/* <Dashboard /> */}
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
