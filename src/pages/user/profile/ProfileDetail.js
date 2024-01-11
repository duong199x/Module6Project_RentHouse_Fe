import {useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {editDetailUser, getUser} from "../../../redux/services/UserService";
import {useDispatch, useSelector} from "react-redux";

export default function ProfileDetail() {
    const dispatch = useDispatch();
    let currentUser = JSON.parse(localStorage.getItem("currentToken"));
    console.log(currentUser.id);
    const { id } = useParams();
    // Khởi tạo state để lưu trữ dữ liệu từ axios
    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hàm async để gửi yêu cầu axios
        const fetchData = async () => {
            try {
                // Gửi yêu cầu axios
                const response = await axios.get(`http://localhost:8080/users/${id}`);

                // Lưu trữ dữ liệu vào state
                setUserInfo(response.data);
                setLoading(false); // Đánh dấu là đã tải xong
            } catch (error) {
                // Xử lý lỗi nếu có
                setError(error);
                setLoading(false);
            }
        };
        fetchData();// Gọi hàm fetchData khi component được mount
    }, []); // Tham số thứ hai là một mảng rỗng để đảm bảo useEffect chỉ chạy một lần khi component được mount

    // useEffect(() => {
    //     const fetchData = async () => {
    //         dispatch(getUser(currentUser.id));
    //     }
    //     fetchData();
    // }, [dispatch, currentUser])

    // const user = useSelector((state) => state.users.list.find((u) => u.id === currentUser.id));
    // useEffect(() => {
    //     if (user) {
    //         setUserInfo({
    //             username: user.username,
    //             fullName: user.fullName,
    //             dateOfBirth: user.dateOfBirth,
    //             address: user.address,
    //             phone: user.phone,
    //             email: user.email,
    //         });
    //     }
    // }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
        console.log(userInfo);
    };

    const handleSaveChanges = async () => {
        dispatch(editDetailUser(userInfo)).then(()=>{
            alert("Update User Success!")
        })
    };

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
                                           onChange={handleInputChange}
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
                                    <label htmlFor="dateOfBirth" className="col-form-label required">Date Of Birth</label>
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
                                <button type="submit" className="btn btn-primary float-right" onClick={handleSaveChanges}>
                                    Save Changes
                                </button>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <div className="profile-image">
                                <div className="image background-image">
                                    <img src="assets/img/author-09.jpg" alt=""/>
                                </div>
                                <div className="single-file-input">
                                    <input type="file" id="user_image" name="user_image"/>
                                    <div className="btn btn-framed btn-primary small">Upload a picture
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}