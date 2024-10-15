
export const getGifs =async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=tQOPp3gj2SL3wd2CP6WmKhPj0iAzjrG3&q=${category}&limit=10` //llamamos a la pagina donde se hara la peticion
    const resp =await fetch(url); //se hace la peticion http
    const {data} = await resp.json()//desestructuramos la data (que es la info que nos trajo la peticion del resp)


    /*esta funcion extrae de la data de arriba caracteristicas especificas de la imagen, creamos un arrow function 
        llamado img que retorna un objeto. Buscamos los atributos que queremos, como id, titulo o la url de la imagen*/
    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs;
}