import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Books from "./components/Books";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills";
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/books",
                element:<Books/>,
            },
            {
                path:"/projects",
                element:<Projects/>,
            },
            {
                path:"/skills",
                element:<Skills/>,
            }
           
        ],
        errorElement:<Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)