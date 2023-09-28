import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import ContactPage from "./ContactPage";
import FirstResearch from "../components/FirstResearch";

const router = createBrowserRouter([
  /*{
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
      
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetail /> }],
      },
    ]
  }*/

  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "first-research", element: <FirstResearch /> },
    ],
  },
]);

export default router;
