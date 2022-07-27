import './App.css';
import { useState, useEffect } from 'react';
import GifList from './components/GifList.js';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs] = useState([])
  const [valor, setValor] = useState('')
  const [keyword, setKeyword] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    getGifs({keyword}).then(gifs=>setGifs(gifs))
    setLoading(false)
  }, [keyword])

  const handleChange = (e) => {
    setValor(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(valor)  
  }

  return(
    <div className='App'>
      <form className='form' onSubmit={handleSubmit}>
        <input value={valor} className='search-bar' id='searcher' placeholder='Write a word to search a gif' type='text' onChange={handleChange}/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <div className='text'>
        {''==keyword ? <h1 className='title'>Do a search to show gifs</h1>
        : <h1 className='title'>Gifs results for "{keyword.toUpperCase()}"</h1>}
      </div>
      {isLoading ? <h1>Cargando</h1>
      : <GifList gifList={gifs}/>
        
      }
    </div>
  );
  
}

export default App;