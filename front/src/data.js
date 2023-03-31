const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
];

export default characters;

// con los exports => arma un objeto con todo lo que esté haciendo export => {Rick}
// el export default se exporta solito aparte => characters
//recordar que por archivo podemos tener un solo default
//aqui por default se envia lo del array pero el objeto Rick queda fuera y se llama
//desestructurando objeto llamamos a rick en app.js
