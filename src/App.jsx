import './App.css';

import dashboard from './icons/dashboard.svg';
import registerOrder from "./icons/register-order.svg";
import manageUser from "./icons/manage-user.svg";
import manageOrder from "./icons/manage-order.svg";
import CustomNav from './components/NavSide';
import Register from "./templates/register/Register.jsx"
import waveBcg from "./icons/wave-bcg.svg";
import LogoIcone from "./icons/Logo-icone.svg";
import AgroTruck from "./icons/AgroTruck.svg";
import driver from './icons/driver.svg';
import Home from './templates/home/Home';
import Perfil from './templates/perfil/perfil';
import PedidoAtual from './templates/pedidoAtual/pedidoAtual';
import CadastrarPedido from './templates/cadastrarPedido/cadastrarPedido';
import Motorista from './templates/mototista/motorista';
import Loading from './templates/loading/Loading';

const NavSide = () => {
  return(
    <CustomNav
        li={[
            [<img alt="" style={{width: "90px", paddingLeft: "0px"}} src={AgroTruck}></img>, LogoIcone],
            ["Procurar motoristas", driver, "/motorista"],
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
  } else if(path === "/register"){
    return(<Register/>)
  } else if(path === "/perfil"){
    return (<Perfil/>)
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