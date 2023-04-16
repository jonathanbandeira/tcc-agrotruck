import Logo from "../../icons/Logo-completo.svg";
import "./cadastrarPedido.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";

const CadastrarPedido = () => {
    
    return AuthGuard(
            <div>
                <div className="title">
                    <img src={Logo}></img>
                    <h1>Cadastrar Pedido</h1>
                </div>
            </div>
        

    )
}

export default CadastrarPedido;


