//import './App.css' :queda comentado al crarse app.module.css
//import Card from './components/Card/Card.jsx'   :queda comentado al crarse app.module.css
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'
import style from "./App.module.css"  //este lo creamos al modificar app.css por app.module.css
//en el ultimo import desestructuramos para llamar a Rick que es objeto que no esta exportado por default
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
  return (
    <div className='App' style={{ padding: '25px' }}>
    <div className={style.nav}>
    <SearchBar
      onSearch={(characterID) => window.alert(characterID)}
    />
  </div>
      
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
