import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import profile from '../assets/dev-logo.jpg';

import "../styles/topmenu.css";

function TopMenu() {
    const { user } = useContext(AuthContext);

    return (
        <div className="top-menu">
            <div className='profile-top-menu'>
                <div>
                    <p>{user?.name} {user?.lastname}</p>
                    <p>{user?.email}</p>
                </div>
                
                <img src={profile} alt="" className="cursor-pointer"/>
                {/* <DropdownMenuDemo /> */}

            </div>        
        </div>
    );
}

export default TopMenu;