import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import DesignSystem from "./pages/DesignSystem.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "design-system", element: <DesignSystem /> },
    ],
  },
];

export default routes;
