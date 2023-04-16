import Logo from "../../icons/Logo-completo.svg";
import "./home.css"

const Home = () => {
    return (
        <div>
            <div className="title">
                <img src={Logo}></img>
                <h1>Bem-Vindo</h1>
            </div>
        </div>
    );
};

export default Home;
