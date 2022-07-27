export default function getGifs({keyword}){
  const apiKey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&Q=${keyword}&limit=10&offset=0&rating=G&lang=en`
  return(
    fetch(url)
    .then(res => res.json()) 
    .then(response => {
      const {data} = response
      const gifs = data.map(gif => {
        const {id, images} = gif
        const {url} = images.downsized_medium
        return{id,url}
      })
      return(gifs)
    }));
}