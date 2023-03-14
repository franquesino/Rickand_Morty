import style from "./Card.module.css";
import {Link} from "react-router-dom"
export default function Card({name, gender, onClose, species, image, id}) {
   //en alt= "rick" , tb es valido , ahí ponemos lo que sale si es q la imagen no carga
   //props es un objeto con propiedades que son un string
   //agregamos className={style.closeButton}
   return (
      <div className={style.container}>
          <button onClick={onClose} className={style.closeButton}>X</button>
          <Link to ={`/detail/${id}`}>
            <h2>{name}</h2>
            
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2>
          <img  src={image} alt={name} /> 
         
          
      </div>
   );
}
