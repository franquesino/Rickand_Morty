import SearchBar from "../components/SearchBar/SearchBar.jsx";

const Nav = ({onSearch}) => {
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;