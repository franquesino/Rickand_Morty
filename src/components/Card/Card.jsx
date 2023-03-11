import style from "./Card.module.css";
export default function Card({name, gender, onClose, species, image}) {
   //en alt= "rick" , tb es valido , ahí ponemos lo que sale si es q la imagen no carga
   //props es un objeto con propiedades que son un string
   //agregamos className={style.closeButton}
   return (
      <div className={style.container}>
          <button onClick={onClose} className={style.closeButton}>X</button> 
          <img  src={image} alt={name} /> 
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
          
      </div>
   );
}
