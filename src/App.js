import './App.css'
//import Card from './components/Card/Card' lo comentamos en el ex 2 hm3
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav"
//import SearchBar from './components/SearchBar/SearchBar.jsx'  
//import characters, { Rick } from './data.js'
import {useEffect, useState} from 'react';
import{Routes, Route, useLocation, useNavigate} from 'react-router-dom';
//en el ultimo import desestructuramos para llamar a Rick que es objeto que no esta exportado por default
//si quisieramos importar otro obj a rick le sumamos con una coma el name del objeto y en
//data.js tendriamos: export const Dai = {name: "dai"}
import Detail from "./components/Detail/Detail.jsx"; 
import About from './components/About/About.jsx';
import Form from "./components/Form/Form";



function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([ ]);
  const [access, setAccess] = useState(false);

  const username = "franquesino@gmail.com";
  const password = "123456f";

  const login =(userData) => {
    if(userData.username === username && userData.password === password)
    setAccess(true)
    navigate("/home");
  }


  useEffect(() =>{
    !access && navigate('/')
  }, [access])


  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
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
      
        

        
        {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
  
       
    
        <Routes>
        <Route path= 'home' element={<Cards onClose={onClose} characters={characters}/>}/>
        <Route path= 'about' element={<About/>} />
        <Route path= 'detail/:detailId' element ={<Detail/>} />
      </Routes>

      
      
      </div>
      
     
  
  )
}

export default App

/*<div>
<SearchBar
  onSearch={(characterID) => window.alert(characterID)}
/>
</div>* la searchbar estaba debajo del div de cards y hr*/


/*<Card
name={Rick.name} //estas 5 son props //que se envuelvan en {} no significa que sean objetos. Aqui son un string, codigo js
species={Rick.species} //es decir nos traemos las propiedades que estan en otro archivo, aqui seria "human"
gender={Rick.gender}
image={Rick.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
//window.alert se puede dejar solo en alert en todo el code
/>*/
