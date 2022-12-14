import React from "react";

const validUserName = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  // função para validar a entrada do hook
  function validate(value) {
    //se recebe falso, não valida nada
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha por favor");
      return false;
    } else if (validUserName[type] && !validUserName[type].regex.test(value)) {
      setError(validUserName[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    // Verifica se tem alguma mensagem de erro e valida oque esta sendo ou está escrito
    // Feature feita para que tira a mensagem de erro após começar a preencher de novo
    if(error) validate(target.value)
    setValue(target.value);
  }

  // Validade é passado da forma que já ativa a função, usando validade()
  // Poderia passar também apenas validate, daí na chamada teria que ter o argumeto validate(value)
  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
