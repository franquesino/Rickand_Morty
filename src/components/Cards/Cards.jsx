import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';
//primero estaba asi: export default function Cards(props) {
   //const { characters } = props; pero aplicamos desestructuración
export default function Cards({ characters, onClose }) {//es un array de arreglos que esta en data
   //puede ser aqui la export default o ir abajo como export default Cards
   
   return (
   <CardsContainer>
      {
         //aplicamos desestructuracion es decir en map character lo cambiamos por las propiedades y abajo dejamos solo las propiedades sin el character
         characters.map(({id, name, species, gender, image})=>{//recorremos el array de objetos , si pusieramos forEach no retornaria nada
            return (<Card   //lo de card lo traemos de data para retornarlo
            key={id} //este lo agregamos porque react en console nos pide
            //un identificador unico,una key, en data esta id, por lo que no es necesario index
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={()=>onClose(id)} //esta funcion la copiamos de app.js
            />)
         })
      }
    



   </CardsContainer>
   )
}
