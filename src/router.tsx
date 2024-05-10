import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import { APP_ROUTES } from "./utils/constants";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardDrawer from "./components/Dashboard/DashboardDrawer";
import UserDetails from "./pages/UserDetails";
import RequireLogin from "./components/RequireLogin";

const routes = createRoutesFromElements(
  <>
    <Route index loader={() => redirect(APP_ROUTES.home)} path="/" />
    <Route path={APP_ROUTES.login} element={<Login />} />
    <Route
      path={APP_ROUTES.dashboard}
      element={
        <RequireLogin>
          <DashboardDrawer />
        </RequireLogin>
      }
    >
      <Route index loader={() => redirect(APP_ROUTES.home)} />
      <Route path={APP_ROUTES.home} element={<Dashboard />} />
      <Route path={`${APP_ROUTES.home}/:id`} element={<UserDetails />} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

export default router;
