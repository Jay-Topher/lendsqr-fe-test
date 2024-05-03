import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import { APP_ROUTES } from "./utils/constants";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const routes = createRoutesFromElements(
  <>
    <Route index loader={() => redirect(APP_ROUTES.home)} path="/" />
    <Route path={APP_ROUTES.login} element={<Login />} />
    <Route path={APP_ROUTES.home} element={<Dashboard />} />
  </>
);

const router = createBrowserRouter(routes);

export default router;
