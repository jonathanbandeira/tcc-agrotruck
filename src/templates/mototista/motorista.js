import Logo from "../../icons/Logo-completo.svg";
import "./motorista.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";

const Motorista = () => {
    
    return AuthGuard(
            <div>
                <div className="title">
                    <img src={Logo}></img>
                    <h1>Motorista</h1>
                </div>
            </div>
        

    )
}

export default Motorista;


