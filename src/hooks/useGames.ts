/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import apiClient from '../services/api-client'
import { CanceledError } from "axios"
interface Game{
    id: number
    name: string
}
interface fetchGames{
    count: number
    results: Game[]
}


const useGames=()=>{
 const [games, setGames] = useState<Game[]>([])
  const [error, setError]= useState('')
  console.log(games)
  useEffect(()=>{
    const controller= new AbortController()
     apiClient.get<fetchGames>('/games', {signal: controller.signal})
     .then(res=>setGames(res.data.results))
     .catch(error=> {
        if (error instanceof CanceledError) return
        setError(error.message)})

     return ()=> controller.abort()
  },[])
  return {games, error}
}
export default useGames