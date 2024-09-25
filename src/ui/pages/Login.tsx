import { useContext, useState } from 'react';

import logo from "../assets/dev-logo.jpg";
import emailIcon from "../assets/icons/emailIcon.svg";
import passIcon from "../assets/icons/passIcon.svg";
import notShowPassIcon from "../assets/icons/notShowPassIcon.svg";
import showPassIcon from "../assets/icons/showPassIcon.svg";

import { AuthContext } from '../context/AuthContext';
import Loader from '../components/Loader';
import "../styles/login.css";


type ShowPassword = {
    onclick: () => void,
    showStatus: boolean
};
const ShowPasswordIcon = ({ onclick, showStatus }: ShowPassword) => {
    return (
        <>
            {
                !showStatus ?
                (
                    <img className='w-5' onClick={onclick} src={notShowPassIcon} alt="" />
                ) : (
                    <img className='w-5' onClick={onclick} src={showPassIcon} alt="" />
                )
            }
        </>
    );
};


const Login = () => {
    
    const { logIn: logInFunc } = useContext(AuthContext);
    
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setShowPass(!showPass);
    };

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const form = new FormData(event.target);
        console.log(form.get("email"));
        console.log(form.get("password"));
    }

    return (
    <section className='section-login'>
            
        <div className='form-login'>
            <img src={logo} />

            <form onSubmit={handleSubmit}>
                
                <div className="form-login-input-div">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                        <img className='w-5' src={emailIcon} alt="" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="form-login-input peer"
                        placeholder=""
                    />
                    <label className="form-login-label">Correo electrónico</label>
                </div>
                
                <div className="form-login-input-div">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                        <img src={passIcon} alt="" />
                    </div>
                    <input
                        type={ showPass ? "text" :"password"}
                        name="password"
                        className="form-login-input peer"
                        placeholder=""
                    />
                    <label className="form-login-label">Contraseña</label>
                    <div className="absolute inset-y-0 right-0 flex items-center ps-1 cursor-pointer">
                        <ShowPasswordIcon
                            onclick={handleClick}
                            showStatus={showPass}
                        />
                    </div>
                    
                </div>
                
                <label>
                    Olvidé mi Contraseña
                </label>
                
                {
                    loading ? (
                        <div className='form-loader'>
                            <Loader />
                        </div>
                    ) : (
                        <button type='submit'> Iniciar sesión </button>
                    )
                }

            
            </form>

        </div>

    </section>
    );
}
 
export default Login;