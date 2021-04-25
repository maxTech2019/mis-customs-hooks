
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

    //retorna en hooks los values y la función handleOnChange
    return [values, handleOnChange, reset];

}
