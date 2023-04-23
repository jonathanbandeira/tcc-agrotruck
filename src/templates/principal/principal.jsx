import Logo from "../../icons/Logo-completo.svg";
import "./principal.css";
import 'bootstrap/dist/css/bootstrap.css';

const Principal = () => {
    return (
        <div>
            <div className="title">
                <img src={Logo}></img>
                <h1>Acesso Rápido</h1>
                    <div className="main-section">    
                    <a href="/principal">        
                        <div className="card-menu">
                            <p className="title-menu">Home</p>
                        </div>
                    </a>
                    <a href="/motorista">   
                        <div className="card-menu">
                            <p className="title-menu">Procurar Motoristas</p>
                        </div>
                    </a>
                    <a href="/employee/EmpCreate">   
                        <div className="card-menu">
                            <p className="title-menu">Cadastrar Pedido</p>
                        </div>
                    </a>
                    <a href="/perfil">   
                        <div className="card-menu">
                            <p className="title-menu">Perfil</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Principal;