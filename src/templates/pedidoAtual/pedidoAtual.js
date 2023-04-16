import Logo from "../../icons/Logo-completo.svg";
import "./pedidoAtual.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";

const PedidoAtual = () => {
    
    return AuthGuard(
            <div>
                <div className="title">
                    <img src={Logo}></img>
                    <h1>Pedido Atual</h1>
                </div>
            </div>
        

    )
}

export default PedidoAtual;


