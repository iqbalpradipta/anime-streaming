import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout";
import Genre from "./pages/genre/genre";
import List from "./pages/list/list";
import About from "./pages/about/about";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/genre",
          element: <Genre />
        },
        {
          path: "/list",
          element: <List />
        },
        {
          path: "/about",
          element: <About />
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
