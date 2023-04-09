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
            ["Dashboard", dashboard],
            ["Restautants", restaurant],
            ["Manage Users", manageUser],
            ["Manage Orders", manageOrder],
            ["Manage Coupons", manageCoupom],
        ]}
    />
  )
}

function teste(){
  return(
    setTimeout(() => {
      content()
    }, 3000)
  )
}

function App() {
  return (
      <div className="App">
        {
          loading()
        }
        {
          teste()
        }

      </div>
  );
}

export default App;
