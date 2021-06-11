import { useState } from "react";

//  Obtiene ls valores de un formulario.
export const useForm = <T extends Object>(form: T) => {
  const [state, setState] = useState(form);

  const onChange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return { onChange, form: state, ...state };
};
