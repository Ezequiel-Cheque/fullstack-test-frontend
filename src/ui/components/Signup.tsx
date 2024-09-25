import { useFormik } from 'formik';

import userlIcon from "../assets/icons/users.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import passIcon from "../assets/icons/passIcon.svg";
import Loader from '../components/Loader';
import { signupSchema } from '../schemas/signup.schema';
import { useState } from 'react';
import notShowPassIcon from "../assets/icons/notShowPassIcon.svg";
import showPassIcon from "../assets/icons/showPassIcon.svg";

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

interface FormValues {
    email: string;
    password: string;
    name: string;
    lastname: string;
}
const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: ""
}
interface FromProps {
    changeForm: ()=>void
}
export const Signup = ({ changeForm }:FromProps) => {

    const [showPass, setShowPass] = useState(false);

    const handleClick = () => {
        setShowPass(!showPass);
    };

    const formik = useFormik({
        validationSchema: signupSchema,
        initialValues,
        onSubmit: (values: FormValues, actions: any) => {

            setTimeout(()=>{
                // logInFunc(email, password);
                console.log(values);
                actions.setSubmitting(false);
            }, 500);
        
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            
                <div className="form-login-input-div">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                        <img className='w-5' src={userlIcon} alt="" />
                    </div>
                    <input
                        type="text"
                        name="name"
                        className="form-login-input peer"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                <label className="form-login-label">Name</label>
                </div>

                <div className="form-login-input-div">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                        <img className='w-5' src={userlIcon} alt="" />
                    </div>
                    <input
                        type="text"
                        name="lastname"
                        className="form-login-input peer"
                        placeholder=""
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                    />
                <label className="form-login-label">Lastname</label>
                </div>

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
                    Login
                </label>
                
                {
                    formik.isSubmitting ? (
                        <div className='form-loader'>
                            <Loader />
                        </div>
                    ) : (
                        <button type='submit'> Signup </button>
                    )
                }

            
        </form>
    );
};