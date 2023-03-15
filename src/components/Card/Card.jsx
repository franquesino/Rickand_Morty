import style from "./Card.module.css";
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

export default function Card({name, gender, onClose, species, image, id}) {
   //en alt= "rick" , tb es valido , ahí ponemos lo que sale si es q la imagen no carga
   //props es un objeto con propiedades que son un string
   //agregamos className={style.closeButton}
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)
   const [isFav, setIsFav] = useState(false);


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({name, gender, onClose, species, image, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) =>{
         if (fav.id === id ){
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
          <Link to ={`/detail/${id}`}>
            <h2>{name}</h2>
            
            </Link>
            <h2>{species}</h2>
            <h2>{gender}</h2>
          <img  src={image} alt={name} /> 
         
          
      </div>
   );
}
