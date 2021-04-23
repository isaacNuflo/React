import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

const GifGrid = ({query, filter}) => {

    const {data:images, loading} = useFetchGifs(query, filter)

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{query}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                    {images.map((img) => 
                        <GifGridItem 
                            key={img.id}
                            {...img} 
                        />
                    )}   
            </div>
        </>
    )
}

export default GifGrid
