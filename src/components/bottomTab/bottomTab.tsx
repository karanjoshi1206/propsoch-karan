import { TAB_NAV_LINKS } from "../../data/tabNav"
import "./style.scss";
const BottomTab = () => {
    return <>
        <ul className="tabNav">

            {TAB_NAV_LINKS.map((tab, idx) => {
                return <li className={tab.isActive ? "active" : ""} key={tab.title}>
                    <img src={`/icons/${tab.icon}`} />
                    <p>{tab.title}</p>
                </li>
            })}
        </ul>

    </>
}

export default BottomTab;