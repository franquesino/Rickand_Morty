//import './App.css' :queda comentado al crarse app.module.css en rigor deberia eliminarse
//import Card from './components/Card/Card.jsx'   //queda comentado al crarse app.module.css
import Cards from './components/Cards/Cards.jsx'
//import SearchBar from './components/SearchBar/SearchBar.jsx' :porque nav se hará cargo de SearchBar
//import characters from './data.js'   :no lo ocupamos aqui para esta tarea
import Nav from "./components/Nav";
import {useState} from 'react';
import{Routes, Route} from 'react-router-dom';
import Detail from "./components/Detail.jsx"; 
import About from './components/About.jsx';
import style from "./App.module.css"  //este lo creamos al modificar app.css por app.module.css
//en el import de data desestructuramos para llamar a Rick que es objeto que no esta exportado por default
//si quisieramos importar otro obj a rick le sumamos con una coma el name del objeto y en
//data.js tendriamos: export const Dai = {name: "dai"}
//antes de la modificacion del archivo es decir del 07 integracion styles el codigo era asi:
/*<div>
        <Card
          name={Rick.name} //estas 5 son props //que se envuelvan en {} no significa que sean objetos. Aqui son un string, codigo js
          species={Rick.species} //es decir nos traemos las propiedades que estan en otro archivo, aqui seria "human"
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
          //window.alert se puede dejar solo en alert en todo el code
        />
      </div>*/
function App () {

  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }
  ]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`).then((response) => response.json())
    .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   })
    
    
  }

  const onClose = (id) => {
    setCharacters(
      ...characters,
      characters.filter(character => character.id !== id)
    )

  }

  return (
    <div className='App' style={{ padding: '25px' }}>
    <div className={style.nav}>
   
  </div>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path= 'home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path= 'about' element={<about/>} />
        <Route path= 'detail/:detailId' element ={<Detail/>} />
      </Routes>
     
      
    </div>
  )
}

export default App
