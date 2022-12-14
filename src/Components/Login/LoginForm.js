import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

function LoginForm() {

    // a constante username recebe todos os parâmetros repasadaos pelo Hook useForm()
    const username = useForm();
    const password = useForm();
    console.log(username);
    // variáveis e suas funções de atualização de estado

    function handleSubmit(event) {
        event.preventDefault();

        // Verifica se username e password estão validados para depois fazer a requisição
        if(username.validate() && password.validate()) {
            // API de login com método POST
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            }).then((response) => {
                console.log(response);
                return response.json();
            }).then((json) => {
                console.log(json);
            });
        }
    }
    
    return (
        <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        {/* Aqui eu desestruturo o username para passar as propriedades do hook para o componente Input */}
        <Input  
            label="Usuário" 
            type="text"  
            name="username" 
            {...username}
        />
        <Input 
            label="Senha" 
            type="password" 
            name="password"
            {...password}
            />
        <Button>Entrar</Button>
      </form>
      <h1>Não tem uma conta? É só criar!</h1>
      <Link to="/login/criar">Cadastre-se</Link>
    </section>
    );
}

export default LoginForm;
