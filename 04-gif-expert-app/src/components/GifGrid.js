import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]) 
    useEffect( () => {
        getGifs(category)
    }, [category])

    const apikey = 'IGKCgu17je9jvSR42vAIsLxNwGkEelG0';

    const getGifs = async (query) => {
        const peticion = await fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=${apikey}`);
        const {data} = await peticion.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        setImages(gifs)
    }

    return (
        <>
            <h3>{category}</h3>
                {images.map((img) => 
                    <GifGridItem 
                        key={img.id}
                        {...img} 
                    />
                )}   
        </>
    )
}

export default GifGrid
