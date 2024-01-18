import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {register} from "../../redux/services/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import Weather from "../extenstion/Weather";

export default function Register() {
    const dipatch = useDispatch();
    const navigate = useNavigate();
    let handleRegister = (values, setSubmitting) => {
        dipatch(register(values)).then(
            (data) => {
                if (data.error) {
                    console.log(data.error);
                    toast.error(`Register Failure (${data.error.message})!`, {
                        position: "top-right"
                    });
                } else {
                    toast.success(`Register Successfully!`, {
                        position: "top-right"
                    });
                    navigate("/login")
                }
            }).catch(() => {
            toast.error("Register Failure !", {
                position: "top-left"
            });
        }).finally(() => setSubmitting(false));
    }

    const currentUser = useSelector(({users}) => {
        return users.currentToken;
    });

    if (currentUser) {
        return <Navigate to="/house"/>
    }

    return (
        <>
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={require("../extenstion/img/logo_app.png")} className="logo-img"
                                         alt="Logo"/>
                                </div>
                                <div className="col-md-7">
                                    <p>Register</p>
                                    <span>Enjoy The Sublime</span>
                                </div>
                            </div>
                        </div>
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                                confirmPassword: "",
                                email: ""
                            }}
                            validationSchema={Yup.object({
                                username: Yup.string()
                                    .required('Required')
                                    .matches(
                                        /^\S+$/,
                                        "Requires names without spaces"
                                    )
                                ,
                                email: Yup.string()
                                    .required('Required')
                                    .matches(
                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(gmail\.com|example\.com\.vn|microsoft\.com\.vn)$/,
                                        'Invalid email format. Should end with @gmail.com, @example.com.vn, or @microsoft.com.vn'
                                    ),
                                password: Yup.string()
                                    .required('Required')
                                    .min(8, 'Password should be at least 8 characters long')
                                    .matches(
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d@$!%*?&]{8,}$/,
                                        'Password must have at least one lowercase letter, one uppercase letter, one digit, and one special character, with a minimum length of 8 characters.'
                                    ),
                                confirmPassword: Yup.string()
                                    .required('Required')
                                    .oneOf([Yup.ref('password')], 'Passwords must match'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                handleRegister(values, setSubmitting)
                            }}
                        >
                            {({ isSubmitting }) => (
                            <Form className="pt-5">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="username"
                                                   className="w-100" as={TextField} label="Username"
                                                   placeholder="Enter username"
                                                   variant="outlined"/>
                                        </div>
                                        <ErrorMessage name="username" component="div" className="error-message"
                                                      style={{color: "red"}}/>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="email" placeholder="Enter email" className="w-100"
                                                   as={TextField} label="Email" variant="outlined"/>
                                            <ErrorMessage name="email" component="div" className="error-message"
                                                          style={{color: "red"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Enter password"
                                                className="w-100" autoComplete="new-password"
                                                as={TextField} label="Password" variant="outlined"
                                            />
                                            <ErrorMessage name="password" component="div" className="error-message"
                                                          style={{color: "red"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Enter confirm password" autoComplete="new-password"
                                                className="w-100"
                                                as={TextField} label="ConfirmPassword" variant="outlined"
                                            />
                                            <ErrorMessage name="confirmPassword" component="div"
                                                          className="error-message" style={{color: "red"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="agree-privacy">By clicking the Sign Up button below you agreed to
                                            our privacy policy and terms of use of our website.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="go-login">Already a member? <Link
                                            to="/login"><u>Sign In</u></Link></span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="form-group">
                                            <Button type="submit" variant="contained" disabled={isSubmitting}>
                                                Sign Up
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                            )}
                        </Formik>
                    </div>
                </div>
                <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                    <div className="auth-left-content mt-5 mb-5 text-center">
                        <Weather/>
                        {/*<div className="text-black-50 mt-5 mb-5">*/}
                        {/*    <h2 className="create-account mb-3">Create Account</h2>*/}
                        {/*    <p>Enter your personal details and start journey with us.</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
