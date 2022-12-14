import React from "react";

// Para um hook funcionar num campo input o estado deve sempre estar no campo value
// e a função atualizadora no campo onChange
function Input({ label, type, name, value, onChange, error, onBlur }) {
    // Input consegue receber todos os parâmetros do hook useForm, inclusive a função onChange, e usa ela.
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        //Voltar nas aulas e estudar onBlur e saber oq ele faz direito
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
