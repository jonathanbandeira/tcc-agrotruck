import { useState } from "react";
import registerStepOne from "../../icons/register-step-1.svg"
import registerStepTwo from "../../icons/register-step-2.svg";
import registerStepThree from "../../icons/register-step-3.svg";
import registerStepFour from "../../icons/register-step-4.svg";
import uploadSvg from "../../icons/upload.svg"
import Logo from "../../icons/Logo-completo.svg"
import "./register.css"

const Register = () => {
    const [step, setStep] = useState(1)

     const changeStep = (p) => {
        if (p === "next" && step < 4){
            setStep(step + 1);
        } else if(p === "previous" && step > 1){
            setStep(step - 1)
        }
     };

    const stepOne = () => {
        return (
            <>
                <div key="step-one" className="register-form">
                    <label>
                        Email
                        <input required type="email"></input>
                    </label>
                    <label>
                        Digite a sua senha
                        <input type="password"></input>
                    </label>
                    <label>
                        Confime a senha
                        <input type="password"></input>
                    </label>
                    <label>
                        Telefone
                        <input type="text"></input>
                    </label>
                    <label>
                        Nome
                        <input type="text"></input>
                    </label>
                    <label>
                        Data de Nascimento
                        <input id="birthday" type="date"></input>
                    </label>
                    <label>
                        CPF
                        <input type="email"></input>
                    </label>
                </div>
                <div className="register-step">
                    <img alt="step-one" src={registerStepOne}></img>
                </div>
            </>
        );
    };

    const stepTwo = () => {
        return (
            <>
                <div key="step-two" className="register-form">
                    <div>
                        <span>Faça o upload da sua foto</span>
                    </div>
                    <input
                        id="file-input"
                        style={{ display: "none" }}
                        type="file"
                    ></input>
                    <div className="upload-area">
                        <img alt="upload" src={uploadSvg}></img>
                    </div>
                </div>
                <div className="register-step">
                    <img alt="step-two" src={registerStepTwo}></img>
                </div>
            </>
        );
    };

    const stepThree = () => {
        return (
            <>
                <div key="step-three" className="register-form">
                    <label>
                        CEP
                        <input type="text"></input>
                    </label>
                    <label>
                        Endereço(Rua, número)
                        <input type="text"></input>
                    </label>
                    <label>
                        Bairro
                        <input type="text"></input>
                    </label>
                    <label>
                        Cidade
                        <input type="text"></input>
                    </label>
                    <label>
                        Estado
                        <input type="text"></input>
                    </label>
                </div>
                <div className="register-step">
                    <img alt="step-three" src={registerStepThree}></img>
                </div>
            </>
        );
    };

    const stepFour = () => {
        return (
            <>
                <div key="step-three" className="register-form" style={{textAlign: "center"}}>
                    <h1>Cadastro efetuado com sucesso!!</h1>
                    <a style={{margin: "2em auto 0 auto"}} className="button" href="/">Voltar</a>
                </div>
                <div className="register-step">
                    <img alt="step-four" src={registerStepFour}></img>
                </div>
            </>
        );
    };

    const step_component = () => {
        switch (step) {
            case 1:
                return(stepOne())
            case 2:
                return(stepTwo())
            case 3:
                return(stepThree())
            case 4:
                return(stepFour())
            default:
                stepThree();
        }
    };

    return (
        <>
            <div className="title">
                <a href="/">
                    <img alt="logo" src={Logo}></img>
                </a>
                <h1>Dados Pessoais</h1>
            </div>
            <div className="container-register">
                {step_component()}
            </div>
            <div style={{display: step === 4 && "none"}} className="buttons-register">
                <button onClick={() => changeStep("previous")} id="button">voltar</button>
                <button onClick={() => changeStep("next")} id="button">Próximo</button>
            </div>
        </>
    );
}

export default Register