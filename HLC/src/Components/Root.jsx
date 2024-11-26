import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import Home from "./Home";

export default function Root() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
