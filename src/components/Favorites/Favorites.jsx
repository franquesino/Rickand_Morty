import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";

import { orderCards, filterCards } from "../redux/actions";

const Favorites = () => {
    const { myFavorites} = useSelector(state=>state)
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }




    return(
        <div>
            <select onChange={handlerOrder}>
                <option value ="order" disabled="disabled">Order By</option>
                <option value ="Ascendente">Ascendente</option>
                <option value ="Descendente">Descendente</option>



            </select>

            <select onChange={handlerFilter}>
                <option value ="filter" disabled="disabled">Filter By</option>
                <option value ="Male">Male</option>
                <option value ="Female">Female</option>
                <option value ="Unknown">Unknown</option>
                <option value ="Genderless">Genderless</option>



            </select>


        </div>
    )
}

export default Favorites;