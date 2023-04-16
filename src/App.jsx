import './App.css';

import dashboard from './icons/dashboard.svg';
import registerOrder from "./icons/register-order.svg";
import manageUser from "./icons/manage-user.svg";
import manageOrder from "./icons/manage-order.svg";
import CustomNav from './components/NavSide';
<<<<<<< HEAD:src/App.jsx
import waveBcg from "./icons/wave-bcg.svg"
import LogoIcone from "./icons/Logo-icone.svg"
import AgroTruck from "./icons/AgroTruck.svg"
import Home from "./templates/home/Home.jsx"
import Register from "./templates/register/Register.jsx"
=======
import waveBcg from "./icons/wave-bcg.svg";
import LogoIcone from "./icons/Logo-icone.svg";
import AgroTruck from "./icons/AgroTruck.svg";
import driver from './icons/driver.svg';
import Home from './templates/home/home';
import Dashboard from './templates/dashboard/dashboard';
import Perfil from './templates/perfil/perfil';
import PedidoAtual from './templates/pedidoAtual/pedidoAtual';
import CadastrarPedido from './templates/cadastrarPedido/cadastrarPedido';
import Motorista from './templates/mototista/motorista';
>>>>>>> 6c3490c4db27bfe714bec0a1721b81158a1ae5f1:src/App.js
import Loading from './templates/loading/Loading';

const NavSide = () => {
  return(
    <CustomNav
        li={[
            [<img style={{width: "90px", paddingLeft: "0px"}} src={AgroTruck}></img>, LogoIcone],
            ["Dashborad", dashboard, "/dashboard"],
            ["Motoristas", driver, "/motorista"],
            ["Cadastrar Pedido", registerOrder, "/cadastrarPedido"],
            ["Pedido Atual", manageOrder, "/pedidoAtual"],
            ["Perfil", manageUser, "/perfil"]
        ]}
    />
  )
}

const TemplateLoader = (path) => {
  if(path === "/") {
    return (<Home/>)
<<<<<<< HEAD:src/App.jsx
  } else if(path === "/register"){
    return(<Register/>)
  }
   else if(path === "/perfil"){
      //caregar componente de tela perfil
=======
  } else if(path === "/dashboard"){
    return (<Dashboard/>)
  } else if(path === "/perfil"){
    return (<Perfil/>)
>>>>>>> 6c3490c4db27bfe714bec0a1721b81158a1ae5f1:src/App.js
  } else if(path === "/motorista"){
    return (<Motorista/>)
  } else if(path === "/pedidoAtual"){
    return (<PedidoAtual/>)
  } else if(path === "/cadastrarPedido"){
    return (<CadastrarPedido/>)
  }
}

const  App = ({path}) => {
  return (
      <div className="App">
        <img className='background' src={waveBcg}></img>
        {path !== "/" && path !== "/register" &&
          NavSide()
        }
        <div className='container'>
          {
            TemplateLoader(path)
          }
        </div>
      </div>
      
  );
}

export default App;