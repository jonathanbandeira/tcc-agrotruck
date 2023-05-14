import Logo from "../../icons/Logo-completo.svg";
import "./perfil.css";
import 'bootstrap/dist/css/bootstrap.css';
//import AuthGuard from "../home/AuthGuard";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import Axios from "axios";

const Perfil = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('https://api.jonatanbandeira.repl.co/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container p-5">
      <h1 className="mb-5">Perfil</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome Completo</th>
            <th scope="col">Email</th>
            <th scope="col">Senha</th>
            <th scope="col">Telefone</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">CPF</th>
          </tr>
        </thead>
        <tbody>
          {users.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.tel}</td>
              <td>{item.birthday}</td>
              <td>{item.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

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




