import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllConvenient} from "../../../redux/services/ConvenientService";
import {Field, Form, Formik} from "formik";
import {CustomCheckboxField} from "../../../components/UI/FormField";
import {useLocation, useNavigate} from "react-router-dom";
import "./convenientStyle.css"


export function CreateConvenient() {

    const navigate = useNavigate();
    const location = useLocation();
    const propsReceived = location.state;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllConvenient());
    }, []);
    const convenients = useSelector(({convenients}) => {
        return convenients.listConvenient;
    })
    const initialValues = {
        selectedConvenients: []
    };
    const handleNext = (values) => {
        const propsToPass = {...propsReceived.data, convenientIds: values.selectedConvenients.map(Number)}
        navigate('/user/addImage',
            {
                state: propsToPass
            });
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleNext}
            >
                <Form>
                    <div className="row">
                        <h3>VUI LÒNG LỰA CHỌN CÁC TIỆN NGHI CÓ TRONG NGÔI NHÀ CỦA BẠN</h3>
                    </div>
                    <div className="row input-checkbox">
                        <Field
                            name="selectedConvenients"
                            render={() => (
                                <>
                                    {
                                        convenients.map((convenient) => {
                                            return (
                                                <CustomCheckboxField
                                                    key={convenient.id}
                                                    name="selectedConvenients"
                                                    value={convenient.id}
                                                    label={convenient.name}
                                                />
                                            )
                                        })}
                                </>
                            )}
                        />
                    </div>
                    <div className="row btn-checkbox">
                        <button type="submit" className="btn btn-success">Next</button>
                    </div>
                </Form>
            </Formik>
        </>

    );
}


