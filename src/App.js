import logo from './logo.svg';
import dashboard from './icons/dashboard.svg'
import restaurant from "./icons/restaurant.svg";
import manageUser from "./icons/manage-user.svg";
import manageOrder from "./icons/manage-order.svg";
import manageCoupom from "./icons/manage-coupom.svg";
import './App.css';
import CustomNav from './components/NavSide';
import "./styles.css";
import Loading from './templates/loading/Loading';
import waveBcg from "./icons/wave-bcg.svg"
import LogoIcone from "./icons/Logo-icone.svg"
import AgroTruck from "./icons/AgroTruck.svg"


let is_loading = true

function loading(){
  return(
    <Loading/>
  )
}



function content(){
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

// function teste(){
//   return(
//     setTimeout(() => {
//       content()
//     }, 3000)
//   )
// }
//if rota === inicio carregar componente inicio ,if rota registro carregar componente registro

function App(props) {
  console.log(props.rota)
  return (
      <div className="App">
        <img className='background' src={waveBcg}></img>
        {
          content()
        }

      </div>
      
  );
}

export default App;
