import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // verificar se o email e a senha estão corretos
    if (email === "email@email.com" && password === "1234") {
      // salvar o token de autenticação no localStorage
      localStorage.setItem("token", "meu_token_de_autenticacao");
      // redirecionar para a página de dashboard
      window.location.href = "/perfil";
    } else {
      alert("Email ou senha incorretos!");
    }
  };
  
  return (
      <div className="login">
          <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Col lg="6">
                      <Form.Control
                          type="email"
                          placeholder="Digite o seu email"
                          value={email}
                          onChange={handleEmailChange}
                      />
                  </Col>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Col lg="6">
                      <Form.Control
                          type="password"
                          placeholder="Digite a sua senha"
                          value={password}
                          onChange={handlePasswordChange}
                      />
                  </Col>
              </Form.Group>
              <Col lg="6">
                    <div className="buttons-login">
                        <input className="button" type="submit" value="Entrar"/>
                        <a href="/register" className="button">Cadastre-se</a>

                    </div>
              </Col>
          </Form>
      </div>
  );
}

export default Login;