import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Books from "./components/BooksSection";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";
import PublicationsInsights from "./components/PublicationInsights";
const AppLayout = () => {
  return (
    <div className="app bg-gray-100 text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/publicationsInsights",
        element: <PublicationsInsights />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
