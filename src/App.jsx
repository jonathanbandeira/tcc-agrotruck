import './App.css';

import dashboard from './icons/dashboard.svg'
import restaurant from "./icons/restaurant.svg";
import manageUser from "./icons/manage-user.svg";
import manageOrder from "./icons/manage-order.svg";
import CustomNav from './components/NavSide';
import waveBcg from "./icons/wave-bcg.svg"
import LogoIcone from "./icons/Logo-icone.svg"
import AgroTruck from "./icons/AgroTruck.svg"
import Home from "./templates/home/Home.jsx"
import Register from "./templates/register/Register.jsx"
import Loading from './templates/loading/Loading';

const NavSide = () => {
  return(
    <CustomNav
        li={[
            [<img style={{width: "90px", paddingLeft: "0px"}} src={AgroTruck}></img>, LogoIcone],
            ["Motoristas", dashboard],
            ["Cadastrar Pedido", restaurant],
            ["Pedido Atual", manageOrder],
            ["Perfil", manageUser]
        ]}
    />
  )
}

const TemplateLoader = (path) => {
  if(path === "/") {
    return (<Home/>)
  } else if(path === "/register"){
    return(<Register/>)
  }
   else if(path === "/perfil"){
      //caregar componente de tela perfil
  } else if(path === "/motorista"){

  } else if(path === "/pedido"){

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
