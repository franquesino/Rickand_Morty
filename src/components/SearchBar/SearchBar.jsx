import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('')
   const handleChange = (event) => {
      setCharacter(event.target.value)
   }


   return (
      <div className={styles.searchbar}>
         <input type='search' value={character} onChange={handleChange}   />
      <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}
//esto consistió en arriba cambiar props por onSearch desestructurando
//luego abajo en onClick se establece la funcion onSearch
//la cual no la ejecutamos, solo se ejecuta al cumplirse el click