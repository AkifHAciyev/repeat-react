/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/LoginForm";
import RegisterForm from "../components/ui/RegisterForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toogleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h3 className="mb-4">Login</h3>
                    {formType === "register" ? (
                        <>
                            <RegisterForm />
                            <p>
                                Alredy have account?{" "}
                                <a role="button" onClick={toogleFormType}>
                                    Sing In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <LoginForm />
                            <p>
                                Dont have account?{" "}
                                <a role="button" onClick={toogleFormType}>
                                    Sing Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
