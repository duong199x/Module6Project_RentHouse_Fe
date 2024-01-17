import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {changeAvartar, editDetailUser, getUser} from "../../../redux/services/UserService";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase/FireBaseConfig";
import {v4 as uuidv4} from "uuid";

export default function ProfileDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch, id]);
    const personalInfo = useSelector(({users}) => {
        return users.currentUser;
    })
    const [user, setUser] = useState(personalInfo)
    useEffect(() => {
        setUser(personalInfo)
    }, [personalInfo]);
    const handleSaveChanges = (value) => {
        const request = {...value, user}
        dispatch(editDetailUser(request)).then(() => {
            navigate("profile/profile-detail/" + id)
        })
    };
    const [loading, setLoading] = useState(false);
    const handleUpload = async (e) => {
        setLoading(true)
        const files = e.target.files;
        if (files[0]) {
            const imageRef = ref(storage, `images/${files[0].name + uuidv4()}`);
            await uploadBytes(imageRef, files[0]);
            const imageUrl = await getDownloadURL(imageRef);
            setUser((prevUser) => ({...prevUser, imageUser: imageUrl}))
            setLoading(false)
        }
        setLoading(false)
    }
    if (!user && !user.imageUser) {
        return (
            <>
                loading
            </>
        )
    }
    return (
        <>
            <div className="block" style={{width: "75%"}}>
                {user && <Formik className="form" initialValues={user} onSubmit={handleSaveChanges}
                                 enableReinitialize={true}>
                    <Form>
                        <div className="row">
                            <div className="col-md-8">
                                <h2>Personal Information</h2>
                                <section>
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label required">UserName</label>
                                        <Field name="username" type="text" className="form-control" id="input-location2"
                                               placeholder="Your UserName" required disabled/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label required">FullName</label>
                                        <Field name="fullName" type="text" className="form-control" id="input-location2"
                                               placeholder="Your FullName" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label required">Address</label>
                                        <Field name="address" type="text" className="form-control" id="input-location2"
                                               placeholder="Your Address" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label required">Age</label>
                                        <Field name="age" type="text" className="form-control" id="input-location2"
                                               placeholder="Your Age" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location" className="col-form-label required">Date Of
                                            Birth</label>
                                        <Field name="dateOfBirth" type="date" className="form-control"
                                               id="input-location2"
                                               placeholder="Your Date Of Birth" required/>
                                    </div>
                                </section>

                                <section>
                                    <h2>Contact</h2>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="col-form-label">Phone</label>
                                        <Field name="phone" type="text" className="form-control" id="phone"
                                               placeholder="Your Phone"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email" className="col-form-label">Email</label>
                                        <Field name="email" type="email" className="form-control" id="email"
                                               placeholder="Your Email" disabled/>
                                    </div>
                                </section>
                                <section className="clearfix">
                                    <button type="submit" className="btn btn-primary float-right">Save Changes</button>
                                </section>
                            </div>

                            <div className="col-md-4">
                                <div className="profile-image">
                                    <div className="image">
                                        <img name="imageUser" src={user.imageUser ?? ''} alt=""/>
                                    </div>
                                    <div className="single-file-input">
                                        <label className="btn btn-framed btn-primary small" htmlFor={"user_image"}>

                                            <input type="file" id="user_image" name="user_image" onChange={(e) => {
                                                handleUpload(e)
                                            }}/>

                                            {loading ? 'Uploading...' : 'Upload a picture'}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
                }
            </div>
        </>
    )
}
