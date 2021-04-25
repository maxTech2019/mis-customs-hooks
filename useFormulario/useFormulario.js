
//CustomHok que se encarga de manejar el formulario

import { useState } from "react"

export const useFormulario = (estadoInicial = {}) => {

    const [values, setValues] = useState(estadoInicial);

    const reset = () =>{
        setValues(estadoInicial);
    }

    const handleOnChange = ({target}) =>{
        setValues({
            ...values,   
            [target.name]: target.value,
        });
    }

    return [values, handleOnChange, reset];

}
