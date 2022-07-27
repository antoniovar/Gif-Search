import Gif from './Gif.js'
import '../styles/GifList.css'

function GifList({gifList}){
  return(
    <div className='list'>
      {gifList.map(gif => {
      return <Gif 
        url={gif.url}
        key={gif.id}
      />}
      )}
    </div>
    
  );
}

export default GifList;