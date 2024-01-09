import * as React from 'react';
import './tableStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllHouse} from "../../redux/services/HouseService";


export default function HouseManager() {
    const dispatch = useDispatch();
    const houses = useSelector(({houses})=>{
        console.log(houses.list)
        return houses.list;
    })

    useEffect(() => {
        dispatch(getAllHouse());
    }, [])
    return (
        <>
            <div className="table-users">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {houses.map((item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>
                                    <img src={item.image} alt="" style={{height:'80px' ,width:'80px',borderRadius:'20%'}}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td style={{width:'100px'}}><button className="btn btn-primary text-caps btn-rounded btn-framed">Update</button></td>
                                <td style={{width:'100px'}}><button className="btn btn-primary text-caps btn-rounded btn-framed">Delete</button></td>

                            </tr>
                        )
                    )}


                    </tbody>
                </table>
            </div>
            <hr/>

        </>
    )
}
