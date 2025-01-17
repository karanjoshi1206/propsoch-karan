import { NavLink, useLocation } from "react-router-dom";
import { TAB_NAV_LINKS } from "../../data/tabNav";
import "./style.scss";
const BottomTab = () => {
  const route = useLocation();
  return (
    <>
      <ul className="tabNav">
        {TAB_NAV_LINKS.map((tab) => {
          return (
            <NavLink to={tab.path} className={route.pathname === tab.path ? "active" : ""} key={tab.title}>
              <img
                src={`/icons/${tab.icon}`}
                style={{
                  filter: route.pathname === tab.path ? "invert(33%) sepia(100%) saturate(500%) hue-rotate(0deg)" : "grayscale(100%)"
                }}
              />
              <p>{tab.title}</p>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default BottomTab;
