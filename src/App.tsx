import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useEffect } from "react";
import { getSavedUser, saveUser } from "./utils";
import { sampleUser } from "./utils/constants";

function App() {
  useEffect(() => {
    const user = getSavedUser();
    if (user?.id && user?.status) return;
    // add saved user to local storage
    saveUser(sampleUser);
    console.log("User saved to local storage");
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
