const apikey = 'IGKCgu17je9jvSR42vAIsLxNwGkEelG0';

export const getGifs = async (query, filter) => {
        const peticion = await fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&limit=${filter}&api_key=${apikey}`);
        const {data} = await peticion.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        return gifs
    }