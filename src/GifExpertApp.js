import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Naruto']);

    return (
    <>
    <h2>GifExpertApp</h2>
    {/* <button onClick={handleAdd}>Agregar</button> */}
    <AddCategory setCategories = {setCategories}/>
    <hr></hr>
    <ol>
        {
            categories.map(category=> (
                <GifGrid key={category}
                 category={category}
                />
            ))
        }
    </ol>
    </>
    ) 
}

export default GifExpertApp;