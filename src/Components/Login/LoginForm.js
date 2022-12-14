import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

function LoginForm() {
  // a constante username recebe todos os parâmetros repasadaos pelo Hook useForm()
  const username = useForm();
  const password = useForm();
  console.log(username);
  // variáveis e suas funções de atualização de estado

  async function handleSubmit(event) {
    event.preventDefault();

    // Verifica se username e password estão validados para depois fazer a requisição
    if (username.validate() && password.validate()) {
      // API de login com método POST
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: username.password,
      });

      const response = await fetch(url, options)
      const json = await response.json();
      // Armazena informação no localstorage
      window.localStorage.setItem('token', json[0].title)
      console.log(json);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        {/* Aqui eu desestruturo o username para passar as propriedades do hook para o componente Input */}
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <h1>Não tem uma conta? É só criar!</h1>
      <Link to="/login/criar">Cadastre-se</Link>
    </section>
  );
}

export default LoginForm;
