import SearchBar from "../components/SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <nav>
            <div>
            <Link to='/'>Logout</Link>
            <Link to='about'>About</Link>
            <Link to='home'>Home</Link>
          
            </div>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;