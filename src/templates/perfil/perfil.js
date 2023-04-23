import Logo from "../../icons/Logo-completo.svg";
import "./perfil.css";
import 'bootstrap/dist/css/bootstrap.css';
//import AuthGuard from "../home/AuthGuard";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Perfil = () => {
    let users = []
    const url = 'http://localhost:3000/users';
    Axios.get(url).then((e) => users = e.data)


    const [Users, fetchUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((res) => {
            fetchUsers(res)
            console.log(res);
        })
    }, []);
    return (
       <div className="container p-5">
        <h1 className='mb-5'>Reactjs Fetch Api Data from Json Server</h1>
       
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Job Title</th>
                </tr>
            </thead>
            <tbody>
            {Users.map((item, i) => {
                                return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.job_title}</td>
                                </tr>      
                                       })}
                <tr>
               
                </tr>
            </tbody>
            </table>
       </div>
    )
}

    
//     return AuthGuard(
//             <div>
//                 <div className="title">
//                     <img src={Logo}></img>
//                     <h1>Perfil</h1>
                    
//                 </div>
//             </div>
        

//     )
// }

export default Perfil;


