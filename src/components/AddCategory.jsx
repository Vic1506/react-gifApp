import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange =(event) =>{
        // console.log(event.target.value)
        setInputValue(event.target.value) //par obtener el valor del input
    }

    const onSubmit =(event)=>{
        event.preventDefault();//esto es para evitar el refresh del navegador
        // console.log(inputValue)
        if (inputValue.trim().length <=1) return; //el trim es para eliminar espacios por delante y detras del texto. esta condicion es para validar que tengamos mas de 1 caracter en el input
        
        // setCategories(categories =>[...categories, inputValue] )
        onNewCategory(inputValue.trim())
        setInputValue('')
    }
  return (

    <form action="" onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="busca tu gif!"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
