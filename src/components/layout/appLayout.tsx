import { Outlet } from "react-router-dom";
import BottomTab from "../bottomTab/bottomTab";
import "./style.scss";
import { Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src="/icons/logo.svg" alt="" />
        </Link>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <BottomTab />
    </div>
  );
};

export default AppLayout;
