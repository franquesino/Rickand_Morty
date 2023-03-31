import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { username, password } from "./utils/consts.js";

function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // ! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";
    // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f" key de Jorge Vega;
    const KEY = "a004b0db865a.35feef895997ffeb8465";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // ! RENDER
  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;


/*<div>
<SearchBar
  onSearch={(characterID) => window.alert(characterID)}
/>
</div>* la searchbar estaba debajo del div de cards y hr*/


/*<Card
name={Rick.name} //estas 5 son props //que se envuelvan en {} no significa que sean objetos. Aqui son un string, codigo js
species={Rick.species} //es decir nos traemos las propiedades que estan en otro archivo, aqui seria "human"
gender={Rick.gender}
image={Rick.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
//window.alert se puede dejar solo en alert en todo el code
/>*/
