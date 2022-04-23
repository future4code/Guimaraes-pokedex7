import React from 'react'

export const sortPokemons = (array) =>{
    const newArray = array.sort((a, b) => Number(a.id) > Number(b.id))
    console.log(newArray.map((p)=> p.id))
    return newArray 
  }
