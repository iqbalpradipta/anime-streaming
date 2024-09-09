import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout";
import Genre from "./pages/genre/genre";
import List from "./pages/list/list";
import About from "./pages/about/about";
import Login from "./pages/Login";
import Register from "./pages/register";
import GenreDetail from "./pages/GenreDetail";
import AnimeDetail from "./pages/animeDetail";

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
        {
          path: "/anime",
          element: <GenreDetail />
        },
        {
          path: "/anime/detail",
          element: <AnimeDetail />
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
