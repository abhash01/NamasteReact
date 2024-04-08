// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Error from "./component/Error";
// import Header from "./component/Header";
// import Body from "./component/Body";
// import Footer from "./component/Footer";
// const Applayout = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//       <Footer />
//     </>
//   );
// };
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Applayout />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
