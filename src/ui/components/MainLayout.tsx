import { ReactNode } from "react";
import { routes } from "../routes/routes";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import "../styles/menu-nav.css";
import ProfileNav from "./Profilenav";
import TopMenu from "./TopMenu";

interface propos {
    children?: ReactNode
};
function MainLayout({ children }: propos) {

return (
    <>
            <div className='main-layout'>

                <nav>
                    <div className="nav-logo">
                        <img src={logo} alt='logo picture'/>
                    </div>

                    <ProfileNav />
                    
                    <ul>
                        {
                            routes.map( ({to, name, icon})=> (
                                <li key={to}>
                                    
                                    <NavLink
                                        to={to}
                                        className={ ({isActive})=> isActive ? 'nav-active' : ''}
                                    >
                                        <p><img src={icon} alt="" /> { name }</p>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                </nav>

                <div className='main-section'>
                    <TopMenu />
                    { children }
                </div>

            </div>
        </>
    );
}

export default MainLayout;