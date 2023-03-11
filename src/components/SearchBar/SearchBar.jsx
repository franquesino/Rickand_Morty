import style from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   return (
      <div className={style.bar}>
         <input type='search' className={style.searchInput} />
      <button className={style.searchButton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
//esto consistió en arriba cambiar props por onSearch desestructurando
//luego abajo en onClick se establece la funcion onSearch
//la cual no la ejecutamos, solo se ejecuta al cumplirse el click