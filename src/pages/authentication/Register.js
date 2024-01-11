import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../../redux/services/UserService";
import {ToastContainer} from "react-toastify";
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import Weather from "../extenstion/Weather";

export default function Register() {
    const dipatch = useDispatch();
    const navigate = useNavigate();
    let handleRegister = (value) => {
        dipatch(register(value)).then((data) => {
            navigate("/home/login")
        })
    }
    return (
        <>
            {/*<div className="page-title">*/}
            {/*    <div className="container">*/}
            {/*        <h1>Register</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<section className="content">*/}
            {/*    <section className="block">*/}
            {/*        <div className="container">*/}
            {/*            <div className="row justify-content-center">*/}
            {/*                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">*/}
            {/*                    <Formik className="form clearfix" initialValues={{*/}
            {/*                        username: "",*/}
            {/*                        password: "",*/}
            {/*                        confirmPassword: "",*/}
            {/*                        email: ""*/}
            {/*                    }} onSubmit={registerUser}>*/}
            {/*                        <Form>*/}
            {/*                            <div className="form-group">*/}
            {/*                                <label htmlFor="name" className="col-form-label required">User Name</label>*/}
            {/*                                <Field name="username" type="text" className="form-control" id="name"*/}
            {/*                                       placeholder="User Name" required/>*/}
            {/*                            </div>*/}

            {/*                            <div className="form-group">*/}
            {/*                                <label htmlFor="email" className="col-form-label required">Email</label>*/}
            {/*                                <Field name="email" type="email" className="form-control" id="email"*/}
            {/*                                       placeholder="Your Email" required/>*/}
            {/*                            </div>*/}

            {/*                            <div className="form-group">*/}
            {/*                                <label htmlFor="password"*/}
            {/*                                       className="col-form-label required">Password</label>*/}
            {/*                                <Field name="password" type="password" className="form-control"*/}
            {/*                                       id="password"*/}
            {/*                                       placeholder="Password" required/>*/}
            {/*                            </div>*/}

            {/*                            <div className="form-group">*/}
            {/*                                <label htmlFor="repeat_password" className="col-form-label required">Repeat*/}
            {/*                                    Password</label>*/}
            {/*                                <Field name="confirmPassword" type="password" className="form-control"*/}
            {/*                                       id="repeat_password" placeholder="Repeat Password" required/>*/}
            {/*                            </div>*/}

            {/*                            <div className="d-flex justify-content-between align-items-baseline">*/}
            {/*                                <label>*/}
            {/*                                    <input type="checkbox" name="newsletter" value="1"/>*/}
            {/*                                    Receive Newsletter*/}
            {/*                                </label>*/}
            {/*                                <button type="submit" className="btn btn-primary">Register</button>*/}
            {/*                            </div>*/}
            {/*                        </Form>*/}
            {/*                    </Formik>*/}
            {/*                    <hr/>*/}
            {/*                    <p>*/}
            {/*                        By clicking "Register" button, you agree with our <Link to={"/login"}>Login</Link>*/}
            {/*                    </p>*/}
            {/*                </div>*/}

            {/*            </div>*/}

            {/*        </div>*/}

            {/*    </section>*/}

            {/*</section>*/}
            <ToastContainer
                position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false}
                closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"
            />
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-2">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={require("../../pages/extenstion/img/logo_app.png")} className="logo-img" alt="Logo"/>
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
                            onSubmit={(values, {setSubmitting}) => {
                                handleRegister(values)
                                setSubmitting(false);
                            }}
                        >
                            <Form className="pt-5">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="username" placeholder="UserName"
                                                   className="form-control" as={TextField} label="UserName"
                                                   variant="outlined"/>
                                        </div>
                                        <ErrorMessage name="username" component="div" className="error-message" style={{color:"red"}}/>
                                    </div>
                                    <div className="col-md-12 mb-4">
                                        <div className="form-group">
                                            <Field type="text" name="email" placeholder="Email" className="form-control"
                                                   as={TextField} label="Email" variant="outlined"/>
                                            <ErrorMessage name="email" component="div" className="error-message" style={{color:"red"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="form-control" autoComplete="new-password"
                                                as={TextField} label="Password" variant="outlined"
                                            />
                                            <ErrorMessage name="password" component="div" className="error-message" style={{color:"red"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="ConfirmPassword" autoComplete="new-password"
                                                className="form-control"
                                                as={TextField} label="ConfirmPassword" variant="outlined"
                                            />
                                            <ErrorMessage name="confirmPassword" component="div"
                                                          className="error-message" style={{color:"red"}}/>
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
                                            <Button type="submit" variant="contained">
                                                Sign Up
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                    <div className="auth-left-content mt-5 mb-5 text-center">
                        <Weather/>
                        <div className="text-white mt-5 mb-5">
                            <h2 className="create-account mb-3">Create Account</h2>
                            <p>Enter your personal details and start journey with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}