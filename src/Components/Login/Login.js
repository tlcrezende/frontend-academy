import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

function Login() {
  return (
    // Aqui o Routes indica que é a página principal de Login com "/" e vai chamar o element LoginForm
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/perdeu" element={<LoginPasswordLost />} />
        <Route path="/resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
