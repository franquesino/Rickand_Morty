import styles from './Card.module.css';
import {Link} from "react-router-dom";


export default function Card({name, gender, onClose, species, image, id}) {
   //en alt= "rick" , tb es valido , ahí ponemos lo que sale si es q la imagen no carga
   //props es un objeto con propiedades que son un string
   return (
      <div className={styles.card}>
          <button onClick={onClose}>X</button>
          <Link to ={`/detail/${id}`}></Link>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt={name} />  
      </div>
   );
}
