import { FormEvent, useContext, useState } from 'react';

import logo from "../assets/dev-logo.jpg";
import emailIcon from "../assets/icons/emailIcon.svg";
import passIcon from "../assets/icons/passIcon.svg";
import notShowPassIcon from "../assets/icons/notShowPassIcon.svg";
import showPassIcon from "../assets/icons/showPassIcon.svg";

import { useFormik } from 'formik';

import { AuthContext } from '../context/AuthContext';
import Loader from '../components/Loader';
import { LoginSchema } from '../schemas/login.schema';
import { LoginInterface } from '../../interfaces/user.interface';


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

const initialValues = {
    email: "",
    password: ""
};
interface FromProps {
    changeForm: ()=>void
}
export const LoginForm = ({ changeForm }:FromProps) => {

    const { logIn: logInFunc } = useContext(AuthContext);
    
    const [showPass, setShowPass] = useState(false);

    const handleClick = () => {
        setShowPass(!showPass);
    };

    const formik = useFormik({
        validationSchema: LoginSchema,
        initialValues,
        onSubmit: (values: LoginInterface, actions: any) => {
            
            const { email, password } = values;

            setTimeout(()=>{
                logInFunc(email, password);
                actions.setSubmitting(false);
            }, 500);
        
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
                
                <div className="form-login-input-div">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                        <img className='w-5' src={emailIcon} alt="" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="form-login-input peer"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <label className="form-login-label">Email</label>
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
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    <label className="form-login-label">Password</label>
                    <div className="absolute inset-y-0 right-0 flex items-center ps-1 cursor-pointer">
                        <ShowPasswordIcon
                            onclick={handleClick}
                            showStatus={showPass}
                        />
                    </div>
                    
                </div>
                
                <label onClick={changeForm}>
                    Signup
                </label>
                
                {
                    formik.isSubmitting ? (
                        <div className='form-loader'>
                            <Loader />
                        </div>
                    ) : (
                        <button type='submit'> Login </button>
                    )
                }

            
        </form>
    );
};