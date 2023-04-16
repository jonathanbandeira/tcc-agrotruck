import Logo from "../../icons/Logo-completo.svg";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import AuthGuard from "../home/AuthGuard";

const Dashboard = () => {
    
    return AuthGuard(
            <div>
                <div className="title">
                    <img src={Logo}></img>
                    <h1>Dashboard</h1>
                </div>
            </div>
    )
}

export default Dashboard;


