import Logo from "../../icons/Logo-completo.svg";
import "./perfil.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";

const Perfil = () => {
    
    return AuthGuard(
            <div>
                <div className="title">
                    <img src={Logo}></img>
                    <h1>Perfil</h1>
                </div>
            </div>
        

    )
}

export default Perfil;


