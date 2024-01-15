import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {editDetailUser, editImageUser, getUser} from "../../../redux/services/UserService";
import {useDispatch, useSelector} from "react-redux";
import {storage} from "../../../firebase/FireBaseConfig";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";

export default function ProfileDetail() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [userInfo, setUserInfo] = useState({
        username: '',
        fullName: '',
        dateOfBirth: '',
        address: '',
        phone: '',
        email: '',
        imageUser: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [image, setImage] = useState('');
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/users/${id}`);

                setUserInfo(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    };

    const handleSaveChanges = async () => {
        dispatch(editImageUser(userInfo)).then(() => {
            dispatch(editDetailUser(userInfo)).then(() => {
                alert("Update User Success!")
            })
        })
    };


    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + image.name
            const storageRef = ref(storage, name)
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUserInfo((prevUserInfo) => ({
                            ...prevUserInfo,
                            imageUser: downloadURL,
                        }));
                        console.log(userInfo);
                    });
                }
            );
        }
        image && uploadFile()
    }, [image])


    return (
        <>
            <div className="col-md-9">
                <form className="form">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Personal Information</h2>
                            <section>

                                <div className="form-group">
                                    <label htmlFor="username" className="col-form-label required">User Name</label>
                                    <input name="username" type="text" className="form-control"
                                           id="username" placeholder="Your UserName"
                                           value={userInfo && userInfo.username ? userInfo.username : ''}
                                           readOnly='true'
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fullName" className="col-form-label required">Full Name</label>
                                    <input name="fullName" type="text" className="form-control"
                                           id="fullName" placeholder="Your Full Name"
                                           value={userInfo && userInfo.fullName ? userInfo.fullName : ''}
                                           onChange={handleInputChange}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dateOfBirth" className="col-form-label required">Date Of
                                        Birth</label>
                                    <input name="dateOfBirth" type="date" className="form-control"
                                           id="dateOfBirth" placeholder="Your Date Of Birth"
                                           value={userInfo && userInfo.dateOfBirth ? userInfo.dateOfBirth : ''}
                                           onChange={handleInputChange}
                                           required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address" className="col-form-label required">Address</label>
                                    <input name="address" type="text" className="form-control"
                                           id="address" placeholder="Your Address"
                                           value={userInfo && userInfo.address ? userInfo.address : ''}
                                           onChange={handleInputChange}
                                           required/>
                                </div>

                            </section>
                            <section>
                                <h2>Contact</h2>
                                <div className="form-group">
                                    <label htmlFor="phone" className="col-form-label">Phone</label>
                                    <input name="phone" type="text" className="form-control" id="phone"
                                           placeholder="Your Phone"
                                           value={userInfo && userInfo.phone ? userInfo.phone : ''}
                                           onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="col-form-label">Email</label>
                                    <input name="email" type="email" className="form-control" id="email"
                                           placeholder="Your Email"
                                           value={userInfo && userInfo.email ? userInfo.email : ''}
                                           onChange={handleInputChange}
                                    />
                                </div>

                            </section>

                            <section className="clearfix">
                                <button type="submit" className="btn btn-primary float-right"
                                        onClick={handleSaveChanges}>
                                    Save Changes
                                </button>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <img
                                className={'avatar'}
                                src={userInfo.imageUser || ''}
                                alt="avatar"
                                style={{width:"150px",height:"150px",borderRadius:"50%"}}
                            />
                            <div
                                style={{borderRadius:"5px",backgroundColor:"red",border:"1.5px solid red",color:"white",textAlign:"center",textDecoration:"none",
                                    display:"inline-block",fontSize:"16px",margin:"4px 2px",cursor:"pointer",width:"150px",height:"50px"}}

                                onClick={() => document.querySelector('.input-field').click()}
                            >
                                Choose profile picture
                                <input
                                    type='file'
                                    className={'input-field'}
                                    onChange={(e) => setImage(e.target.files[0])}
                                    hidden
                                />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
