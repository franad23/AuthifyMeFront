const validator = (type: string, valueInput: string | number | Date): boolean | { isValidated: boolean, message: string }  => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const dateRegex = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

  switch (type) {
    case "text":
      if (typeof valueInput === "string" && valueInput.length >= 3 && valueInput.length <= 30) {
        return true;
      }
      return {  
        isValidated: false,
        message: "El nombre debe tener entre 3 y 30 caracteres."
      };

    case "number":
      if (typeof valueInput === "number" && valueInput >= 1 && valueInput <= 9999999999999) {
        return true;
      }

      if (typeof valueInput === "string" && valueInput.length <= 20) {
        return true;
      }

      return {  
        isValidated: false,
        message: "Número inválido. Debe ser un número entre 1 y 9,999,999,999,999 o una cadena de hasta 20 caracteres."
      };

    case "date":
      if (dateRegex.test(valueInput.toString())) {
        return true;
      }
      return {  
        isValidated: false,
        message: "Fecha inválida."
      };

    case "email":
      if (typeof valueInput === "string" && emailRegex.test(valueInput)) {
        return true;
      }
      return {  
        isValidated: false,
        message: "Correo electrónico inválido."
      };

    default:
      return false;
  }
};

export default validator;
