import { Outlet } from "react-router-dom";
import BottomTab from "../bottomTab/bottomTab";
import "./style.scss";

const AppLayout = () => {
  return (
    <div>
      <header className="header">
        <img src="/icons/logo.svg" alt="" />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <BottomTab />
    </div>
  );
};

export default AppLayout;
