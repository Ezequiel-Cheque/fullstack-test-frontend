import logo from "../assets/dev-logo.jpg";
import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { Signup } from "../components/Signup";

import "../styles/login.css";

const Login = () => {
    
    const [form, setForm] = useState("login");

    return (
    <section className='section-login'>
        
        <div className='form-login'>
            <img src={logo} />
            {
                form == "login" && (
                    <LoginForm
                        changeForm={()=>{setForm("signin")}}
                    />
                )
            }
            {
                form == "signin" && (
                    <Signup
                        changeForm={()=>{setForm("login")}}
                    />
                )
            }

        </div>

    </section>
    );
}
 
export default Login;