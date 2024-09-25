import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../../components/ui/dropdown-menu";

import {
    LogOut
} from "lucide-react";

import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import profile from '../assets/dev-logo.jpg';

import "../styles/topmenu.css";

function TopMenu() {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    };

    return (
        <div className="top-menu">
            <div className='profile-top-menu'>
                <div>
                    <p>{user?.name} {user?.lastname}</p>
                    <p>{user?.email}</p>
                </div>
                
                <DropdownMenu>
        
                    <DropdownMenuTrigger asChild>
                        <img src={profile} alt="" className="cursor-pointer"/>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-44">
                    <DropdownMenuLabel>My account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={handleLogOut} className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                    
                    </DropdownMenuContent>
                </DropdownMenu>

            
            </div>        
        </div>
    );
}

export default TopMenu;