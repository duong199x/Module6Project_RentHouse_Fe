import {useDispatch} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {login} from "../../redux/services/UserService";
import {Link, useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import {Button, colors} from "@mui/material";
import Weather from "../extenstion/Weather";
import "./Login.css"

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const loginUser = (value) => {
        dispatch(login(value)).then((data) => {
            console.log(data)
            // debugger;
            navigate("/user/house")
        })
    }
    return (
        <>
            {/*<div className="page-title">*/}
            {/*    <div className="container">*/}
            {/*        <h1>Sign In</h1>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<section className="content">*/}
            {/*    <section className="block">*/}
            {/*        <div className="container">*/}
            {/*            <div className="row justify-content-center">*/}
            {/*                <div className="col-md-4">*/}
            {/*                    <Formik className="form clearfix" initialValues={*/}
            {/*                        {*/}
            {/*                            username: "",*/}
            {/*                            password: ""*/}
            {/*                        }*/}
            {/*                    }*/}
            {/*                            onSubmit={loginUser}>*/}
            {/*                        <Form>*/}
            {/*                            <div className="form-group">*/}
            {/*                                <label htmlFor="email" className="col-form-label required">UserName</label>*/}
            {/*                                <Field name="username" type="text" className="form-control" id="email"*/}
            {/*                                       placeholder="UserName" required/>*/}
            {/*                            </div>*/}

            {/*                            <div className="form-group">*/}
            {/*                                <label htmlFor="password"*/}
            {/*                                       className="col-form-label required">Password</label>*/}
            {/*                                <Field name="password" type="password" className="form-control"*/}
            {/*                                       id="password"*/}
            {/*                                       placeholder="Password" required/>*/}
            {/*                            </div>*/}

            {/*                            <div className="d-flex justify-content-between align-items-baseline">*/}
            {/*                                <label>*/}
            {/*                                    <input type="checkbox" name="remember" value="1"/>*/}
            {/*                                    Remember Me*/}
            {/*                                </label>*/}
            {/*                                <button type="submit" className="btn btn-danger">Sign In</button>*/}
            {/*                            </div>*/}
            {/*                        </Form>*/}
            {/*                    </Formik>*/}
            {/*                    <hr/>*/}
            {/*                    <p>*/}
            {/*                        Troubles with signing? <Link to={"/register"}>Register.</Link>*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*</section>*/}
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-5">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={require("../../pages/extenstion/img/logo_app.png")} className="logo-img" alt="Logo"/>
                                </div>
                                <div className="col-md-7">
                                    <p>Login</p>
                                    <span>Enjoy the sublime</span>
                                </div>
                            </div>
                        </div>
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            validationSchema={Yup.object({
                                username: Yup.string()
                                    .required('Required')
                                ,
                                password: Yup.string()
                                    .required('Required')
                                    .min(8, 'Password should be at least 8 characters long')
                                    .matches(
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-])[A-Za-z\d@$!%*?&]{8,}$/,
                                        'Password must have at least one lowercase letter, one uppercase letter, one digit, and one special character, with a minimum length of 8 characters.'
                                    )
                            })}
                            onSubmit={loginUser}
                        >
                                <Form>
                                    <div className="row">
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <Field className="form-control"
                                                       type="text"
                                                       id="email"
                                                       name="username"
                                                       label="UserName"
                                                       as={TextField}
                                                       autoComplete="email"
                                                />
                                                <ErrorMessage name="username" component="div" className="error-message" style={{color:"red"}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-2">
                                            <div className="form-group">
                                                <Field className="form-control"
                                                       type="password"
                                                       id="password"
                                                       name="password"
                                                       label="Password"
                                                       as={TextField}
                                                       autoComplete="current-password"
                                                       variant="outlined"
                                                />
                                                <ErrorMessage name="password" component="div"
                                                              className="error-message" style={{color:"red"}}/>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <Link>Forgot password?</Link>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <div className="form-group">
                                                <center>
                                                    <Button type="submit" variant="contained" color="primary">
                                                        Sign In
                                                    </Button>
                                                </center>
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center mt-5">
                                          <span className="go-login">
                                              Not yet a member? <Link to="/register"><u>Sign Up</u></Link>
                                          </span>
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
                            <h2 className="create-account mb-3">Welcome Back</h2>
                            <p>Thank you for joining. Updates and new features are released daily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}