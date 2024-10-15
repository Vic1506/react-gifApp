import {useState} from 'react';
import { AddCategory, GifGrid } from "./components";
import { ResetCategory } from './components/ResetCategory';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Mina de Twice']) //el setCategories es el que mandamos llamar para setear algun elemento nuevo


  
  const onAddCategory = (newCategory) =>{
    // categories.push('Kpop')
    // setCategories([...categories, 'K-Pop']) /* el ...categories, hace una copia de las categorias actuales y al poner un nuevo elemento este puede ser agregado a la lista*/ 
    // console.log(newCategory)
    if (categories.includes(newCategory)) return; //validamos que si en las categorias ya existe la categoria nueva, esta no se va a agregar
    setCategories([ newCategory, ...categories])
  }  

  return (
    <>
      {/*Titulo*/}
        <h1>Gif expert App</h1>

        {/*input */}
        <AddCategory 
            onNewCategory ={onAddCategory}

        // setCategories={ setCategories}
        />
        <ResetCategory onReset={setCategories}/>
        
          {
          categories.map( category =>(
            <GifGrid 
              key={category} 
              category={category} />
            
            ))
          }

          
    </>
)
}
