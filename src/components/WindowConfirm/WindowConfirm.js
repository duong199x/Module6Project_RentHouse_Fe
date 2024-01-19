import './WindowConfirm.css'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function WindowConfirm() {
    let check = true;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/login")
    }

    return (
        <>
            {check ?
                <>
                    <div id="myModal">
                        <div className="modal-dialog modal-confirm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="icon-box">
                                        <i className="material-icons">&#xE876;</i>
                                    </div>
                                    <h4 className="modal-title w-100">Success!</h4>
                                </div>
                                <div className="modal-body">
                                    <p className="text-center">Xác nhận thành công, bạn muốn tiếp tục trải nghiệm chứ
                                        ?.</p>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-success btn-block" data-dismiss="modal"
                                            onClick={handleClick}>Go to website
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>:<>
                    <div className="mo">
                        <div className="modal-dialog modal-confirm1">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="icon-box">
                                        <i className="material-icons">&#xE5CD;</i>
                                    </div>
                                    <h4 className="modal-title w-100">Error!</h4>
                                </div>
                                <div className="modal-body">
                                    <p className="text-center">Xác nhận thất bại =(.</p>
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-success btn-block" data-dismiss="modal">Go to website</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>


    )
}

export default WindowConfirm;