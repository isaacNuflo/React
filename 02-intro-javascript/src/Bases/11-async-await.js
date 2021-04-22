//const getImagenPromesa = () => new Promise((resolve, reject) => {resolve('https://asdfasdfa.com')});

const apikey = 'IGKCgu17je9jvSR42vAIsLxNwGkEelG0';

const getImagen = async () => {
    try {
        const peticion = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await peticion.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImagen();