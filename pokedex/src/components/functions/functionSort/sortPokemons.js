export const sortPokemons = (array) =>{
  const newArray = array.sort((a, b) => Number(a.id) - Number(b.id))
  return newArray 
}