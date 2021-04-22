import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One puch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['Samurai X'])

    /*const handleAdd = () => {
        setCategories([...categories, 'Naruto'])
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map((category, i) => 
                        <GifGrid 
                            category = {category}
                            key = {category}
                        />)
                }
            </ol>
        </>
    );
};

export default GifExpertApp
