const characters = [
  {
    name: 'Rick Sanchez',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  },
  {
    name: 'Summer Smith',
    species: 'Human',
    gender: 'Female',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  },
  {
    name: 'Beth Smith',
    species: 'Human',
    gender: 'Female',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }
]


export default characters
//recordar que por archivo podemos tener un solo default
//aqui por default se envia lo del array pero el objeto Rick queda fuera y se llama
//desestructurando objeto llamamos a rick en app.js
