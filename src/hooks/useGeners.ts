import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre{
    id: number
    name: string
}

interface fetchGenresResponse{
    count: number
    results: Genre[]
}

const useGenres=()=>{
   const [genres, setGenres]=useState<Genre[]>([])
   const [error, setError]= useState('')
   const [isLoading, setLoading]= useState(false)

   useEffect(()=>{
     setLoading(true)
     apiClient.get<fetchGenresResponse>('/genres')
     .then(res=> {
        setGenres(res.data.results);
        setLoading(false)
    })
     .catch(error=>{
        setError(error.message);
        setLoading(false)
    })

   },[])

   return { genres, error, isLoading}
}

export default useGenres;