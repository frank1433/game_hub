// import React, { useEffect, useState } from 'react'
// import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
// interface Game{
//     id: number
//     name: string
// }
// interface fetchGames{
//     count: number
//     results: Game[]
// }

const GameGrid = () => {
   const {games, error}= useGames()

  return (
    <>
    {error && <Text>{error}</Text>}
     <ul>
        {games.map(item=> (<li key={item.id}>{item.name}</li>))}
     </ul>
    </>
  )
}

export default GameGrid