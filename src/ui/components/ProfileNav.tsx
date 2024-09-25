import { useContext } from "react";
import profile from '../assets/dev-logo.jpg';

import { AuthContext } from '../context/AuthContext';
import '../styles/profile-nav.css';

const ProfileNav = () => {
    
    const { user } = useContext(AuthContext);

    return (
    <div className="profile-nav">
        <img className='nav-profile' src={profile} alt='Profile picture'/>
        <div>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
        </div>
        
    </div>
  )
}

export default ProfileNav;