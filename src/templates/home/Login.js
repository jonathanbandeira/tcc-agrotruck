import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // verificar se o email e a senha estão corretos
    if (email === "meuemail@email.com" && password === "1234") {
      // salvar o token de autenticação no localStorage
      localStorage.setItem("token", "meu_token_de_autenticacao");
      // redirecionar para a página de dashboard
      window.location.href = "/perfil";
    } else {
      alert("Email ou senha incorretos!");
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite o seu email" value={email} onChange={handleEmailChange} />
      </Form.Group>
  
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite a sua senha" value={password} onChange={handlePasswordChange} />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Entrar
      </Button>
    </Form>
  );
}

export default Login;