import './WindowConfirmFailed.css'
import {useNavigate} from "react-router-dom";
function WindowConfirmFailed(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
    }

    return(
        <div id="myModal" >
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="icon-box">
                            <i className="material-icons">&#xE876;</i>
                        </div>
                        <h4 className="modal-title w-100">Failed!</h4>
                    </div>
                    <div className="modal-body">
                        <p className="text-center">Xác nhận thất bại.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success btn-block" data-dismiss="modal" onClick={handleClick}>Go to website</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default WindowConfirmFailed;