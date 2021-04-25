import { useState } from "react";

//CuntomHook
export const useContador = ( estadoInicio= 10 ) => {
   const [contador, setContador] = useState( estadoInicio ); 

   const incremento = () =>{
        setContador(contador + 1);
   }

   const decremento = () =>{
        setContador(contador - 1);
   }

   const reseat = () =>{
       setContador(estadoInicio);
   }

   //retorna un objeto que contiene el valor del estado, función incremento y decremento.
    return {
        contador,
        incremento,
        decremento,
        reseat
    };
}
