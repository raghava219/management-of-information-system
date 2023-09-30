import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import FirstResearch from "../components/FirstResearch";
import FileUpload from "../components/FileUploadForm";
import FileUploadForm from "../components/FileUploadForm";

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
      { path: "file-upload", element: <FileUploadForm /> },
    ],
  },
]);

export default router;
