import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {getUser, login} from "../../redux/services/UserService";
import {Link, Navigate, useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import TextField from "@mui/material/TextField";
import {Button, colors} from "@mui/material";
import Weather from "../extenstion/Weather";
import "./Login.css"
import axios from "axios";
import {toast} from "react-toastify";
import { Knock } from "@knocklabs/node";
export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const loginUser = (value) => {
        dispatch(login(value)).then((data) => {
            if (data.error) {
                navigate("/login")
                toast.error(`Login Failure (${data.error.message})!`, {
                    position: "top-right"
                });
            }
            else {
                dispatch(getUser(data.payload.id)).then(async (res)=>{
                    const knockClient = new Knock(process.env.REACT_APP_KNOCK_API_KEY);
                    const knockUser = await knockClient.users.bulkIdentify(
                        [
                            {
                                id: String(res.payload.id),
                                name: String(res.payload.username),
                                email: String(res.payload.email),
                              },
                        ]);
                })
                navigate("/house");
                toast.success(`Login Successfully!`, {
                    position: "top-right"
                });

            }
            // TODO: Gọi API để lấy  thông tin user sau khi đăng nhập thành công
            // axios.get(`http://localhost:8080/users/${data.data.id}`).then(resp => {
            //     console.log(resp);
                // TODO: lưu vào localstorage trường role
            // });

        })
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
                        <div className="auth-logo text-center mb-5">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src={require("../extenstion/img/logo_app.png")} className="logo-img" alt="Logo"/>
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
                        {/*<div className="text-title mt-5 mb-5">*/}
                        {/*    <h1 className="create-account mb-3">Welcome Back</h1>*/}
                        {/*    <p>Thank you for joining. Updates and new features are released daily.</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    )
}
