//Hooks

import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const estaMontado = useRef(true);
    
    const [state, setState] = useState({ data:null, loading:true, error:null })

    useEffect(()=>{
        return () =>{
            estaMontado.current=false;
        }
    },[]);

    useEffect (()=>{

        //Actualizar el estado para que aparezca el loading c/vez que carga la nueva frase
        setState({ data:null, loading:true, error:null });
        fetch (url)
            .then (resp => resp.json())
            .then (data=>{
                        if(estaMontado.current){
                            setState({
                                data,
                                loading:false,
                                error:null
                            });
                            
                        }    
                })        
    }, [url]);

    return state;
}
