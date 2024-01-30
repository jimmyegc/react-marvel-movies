import { useEffect, useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom';
import { PUBLIC_KEY, HASH, TS } from './const/api';

function App() {

  const [caracters, setCaracters] = useState(null);

  const navigate = useNavigate();

  function processResponse(response) {
    function reduceCaracters(result, caracter) {
      result.push({
        id: caracter.id,
        name: caracter.name,
        thumbnail: caracter.thumbnail.path +'.'+ caracter.thumbnail.extension,
        comics: caracter.comics.available,
      });
      return result;
    }
    setCaracters(response.data.results.reduce(reduceCaracters, []));
  }

  function processError(error) {
    console.error(error);
  }

  useEffect(
    function(){
      const url = `http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;
      fetch(url)
        .then((response) => response.json().then( data => processResponse(data)))
        .catch((error)  => console.error(error))
    }
  ,[]);


  function renderCaracter(result, caracter){
    function onClick(){
      navigate("/caracter/"+caracter.id);
    }

    result.push(
      <div className='caracter' key={caracter.id} onClick={onClick}>
        <img className='caracter-image'src={caracter.thumbnail} />
        <span className='caracter-info'>{caracter.name}</span>
        <span className='caracter-info'>Present in {caracter.comics} commics</span>
      </div>
    )
    return result;
  }

  return (
    <div className='caracter-wrapper'>
      {caracters && caracters.reduce(renderCaracter, [])}
    </div>
  )
}

export default App
