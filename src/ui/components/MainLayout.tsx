import { ReactNode } from "react";
import { routes } from "../routes/routes";
import { NavLink } from "react-router-dom";

interface propos {
    children?: ReactNode
};
function MainLayout({ children }: propos) {

return (
    <>
            <div className='main-layout'>

                <nav>
                    <img className='nav-logo' src="" alt='logo picture'/>

                    {/* <ProfileNav /> */}
                    
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
                    {/* <TopMenu /> */}
                    { children }
                </div>

            </div>
        </>
    );
}

export default MainLayout;