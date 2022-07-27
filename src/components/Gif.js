import '../styles/Gif.css'

function Gif({url}) {
  return(
    <div className="gif">
      <img loading="lazy" src={url}></img>
    </div>
  );
}

export default Gif;