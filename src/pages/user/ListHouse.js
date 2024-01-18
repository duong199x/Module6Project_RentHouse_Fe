import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllHouse, searchHouse } from "../../redux/services/HouseService";
import { getAllCategories } from "../../redux/services/CategoryService";
import { House } from "./House";
import { getAllConvenient } from "../../redux/services/ConvenientService";
import Select from 'react-select';
import {useFormik} from "formik";

export default function ListHouse() {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.listCategories);
    const message = useSelector(state => state.houses.message);
    const houses = useSelector(({ houses }) => {
        return houses.list;
    });
    const convenients = useSelector(({ convenients }) => {
        return convenients.listConvenient.map(convenient => ({
            value: convenient.id,
            label: convenient.name,
        }));
    });
    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '500px',
        }),
    };
    const formik = useFormik({
        initialValues: {
            "name": "",
            "location": "",
            "kitchen": 0,
            "minPrice": null,
            "maxPrice": null,
            "categoryId": 0,
            "convenientIds": [
                0
            ]
        },
        onSubmit: (values) => {
            console.log(values)
            dispatch(searchHouse(values));
        },
    });
    const handleSelectChange = (selectedOptions) => {
        formik.setFieldValue('convenientIds', selectedOptions.map(option => option.value));
    };
    useEffect(() => {
        dispatch(getAllConvenient());
        dispatch(getAllCategories());
        dispatch(getAllHouse());
    }, []);

    return (
        <>
                <form className="hero-form form" style={{ paddingTop: "50px" }} 
                onSubmit={formik.handleSubmit}>
                    <div style={{ marginTop: "0px" }}>
                        <h2 style={{ color: "#FF0000" }}>HÃY THUÊ VÀ BÁN NHÀ THEO CÁCH CỦA BẠN ^^</h2>
                        {message && <h2 style={{ color: 'green' }}> {message} </h2>}
                    </div>
                    <div className="container">
                        <div className="main-search-form">
                            <div className="form-row">
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <input name="name" type="text" className="form-control" id="what"
                                            placeholder="What are you looking for?" onChange={formik.handleChange} value={formik.values.name}/>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <input name="location" type="text" className="form-control"
                                            id="input-location" placeholder="Enter Location" onChange={formik.handleChange} value={formik.values.location}/>
                                        <span className="geo-location input-group-addon" data-toggle="tooltip"
                                            data-placement="top" title="Find My Position"><i
                                                className="fa fa-map-marker"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <div className="form-group">
                                        <select name="categoryId" id="category" placeholder="Select Category" onChange={formik.handleChange} value={formik.values.categoryId}>
                                            <option value="" label="Select Category" />
                                            {categories &&
                                                categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                </div>

                                <div className="col-md-3 col-sm-3">
                                    <button type="submit" className="btn btn-primary width-100">Search</button>
                                </div>
                            </div>
                        </div>
                        <div className="alternative-search-form">
                            <a href="#collapseAlternativeSearchForm" className="icon" data-toggle="collapse"
                                aria-expanded="false" aria-controls="collapseAlternativeSearchForm"><i
                                    className="fa fa-plus"></i>More Options</a>
                            <div className="collapse" id="collapseAlternativeSearchForm">
                                <div className="wrapper">
                                    <div className="form-row">
                                        <div
                                            className="col-xl-6 col-lg-12 col-md-12 col-sm-12 d-xs-grid d-flex align-items-center justify-content-between">
                                            <label>
                                                <Select
                                                    styles={customStyles}
                                                    isMulti
                                                    options={convenients}
                                                    value={convenients.filter(option => formik.values.convenientIds.includes(option.value))}
                                                    onChange={handleSelectChange}
                                                    placeholder="Convenient"
                                                    name="convenientIds"
                                                />

                                            </label>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input name="minPrice" type="text"
                                                            className="form-control small" id="min-price"
                                                            placeholder="Minimal Price" onChange={formik.handleChange} value={formik.values.minPrice}/>
                                                        <span className="input-group-addon small">$</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input name="maxPrice" type="text"
                                                            className="form-control small" id="max-price"
                                                            placeholder="Maximal Price" onChange={formik.handleChange} value={formik.values.maxPrice}/>
                                                        <span className="input-group-addon small">$</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            <section className="content">
                <section className="block">
                    <div className="container">

                        <div className="section-title clearfix">
                            <div className="float-xl-left float-md-left float-sm-none">
                                <h2>Recent Listings</h2>
                            </div>
                            <div className="float-xl-right float-md-right float-sm-none">
                                <select name="categories" id="categories" className="small width-200px"
                                    data-placeholder="Category">
                                    <option value="">Category</option>
                                    {categories && categories.map((i) => <option value={i.id}>{i.name} </option>)
                                    }
                                </select>
                                <select name="sorting" id="sorting" className="small width-200px"
                                    data-placeholder="Default Sorting">
                                    <option value="">Default Sorting</option>
                                    <option value="1">Newest First</option>
                                    <option value="2">Oldest First</option>
                                    <option value="3">Lowest Price First</option>
                                    <option value="4">Highest Price First</option>
                                </select>
                            </div>
                        </div>

                        <div className="items masonry grid-xl-4-items grid-lg-3-items grid-md-2-items">
                            {houses && houses.map((item) => {
                                return (
                                    <House item={item}/>

                                );
                            })}

                            {/*<a href="submit.html" className="item call-to-action">*/}
                            {/*    <div className="wrapper">*/}
                            {/*        <div className="title">*/}
                            {/*            <i className="fa fa-plus-square-o"></i>*/}
                            {/*            Submit Your Ad*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</a>*/}


                        </div>
                        <div className="center">
                            <a href="#" className="btn btn-primary btn-framed btn-rounded">Load More</a>
                        </div>
                    </div>

                </section>

            </section>
        </>
    );
}