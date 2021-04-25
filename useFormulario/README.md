# Hook: useFormulario

Ejemplo de Uso:

```
  const estadoInicial = {
    name: '',
    age: 0,
    email:''
  } ;

  const [values, handleOnChange, reset] = useFormulario(estadoInicial);
```


DESCRIPCIÓN:

Retorna el estado actual del formulario, también retorna una referncia a las funciones handleOnChange y reset.