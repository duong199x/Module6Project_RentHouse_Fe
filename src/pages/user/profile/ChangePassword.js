import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {changePassword} from "../../../redux/services/UserService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export default function ChangePassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changePass = (values) => {
        dispatch(changePassword(values)).then((data)=>{
            if (data.error) {
                toast.error(`Change Password Failure (${data.error.message})!`, {
                    position: "top-right"
                });
            } else {
                toast.success(`Change Password   Successfully!`, {
                    position: "top-right"
                });
                navigate("/login")
                localStorage.clear()
            }

        })
    }
    return (
        <>
            <div className="col-md-9">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Formik
                                initialValues={
                                    {
                                        oldPassword: "",
                                        password: "",
                                        confirmPassword: ""
                                    }
                                } onSubmit={changePass}
                            >
                                <Form>
                                    <div className="card mb-5">
                                        <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="current_password" className="col-form-label required">Current
                                            Password</label>
                                        <Field name={"oldPassword"} type="password" className="form-control"
                                               id="current_password" placeholder="Current Password" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="new_current_password"
                                               className="col-form-label required">New Password</label>
                                        <Field name={"password"} type="password"
                                               className="form-control" id="new_current_password"
                                               placeholder="New Password" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="repeat_new_current_password"
                                               className="col-form-label required">Repeat Password</label>
                                        <Field name={"confirmPassword"} type="password"
                                               className="form-control" id="repeat_new_current_password"
                                               placeholder="Repeat New Password" required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary float-right">Change
                                        Password
                                    </button>
                                            </div>
                                            </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
            </div>
        </>
    )
}