import Logo from "../../icons/Logo-completo.svg";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./Login";
import "./AuthGuard";
import "./Login"


const Home = () => {
    return (
        <div>
            <div className="title">
                <img src={Logo}></img>
                <h1>Bem-Vindo</h1>
                <Login />
            </div>
        </div>
    );
};

export default Home;