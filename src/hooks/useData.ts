/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react"
import apiClient from '../services/api-client'
import { AxiosRequestConfig, CanceledError } from "axios"

// export interface Platform{
//     id: number
//     name: string
//     slug: string
// }
// export interface Game{
//     id: number
//     name: string
//     background_image: string
//     parent_platforms: {platform: Platform}[]
//     metacritic: number
// }
interface fetchResponse<T>{
    count: number
    results: T[]
}

// interface Props{
//     endPoint: string
// }

const useData=<T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[])=>{
 const [data, setData] = useState<T[]>([])
  const [error, setError]= useState('')
  const [isLoading, setLoading] = useState(false)
  console.log(data)
  useEffect(()=>{
    const controller= new AbortController()
    setLoading(true)
     apiClient.get<fetchResponse<T>>(endPoint, {signal: controller.signal, ...requestConfig})
     .then(res=>{setData(res.data.results);
        setLoading(false)
     })
     .catch(error=> {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false)
    })

     return ()=> controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps ? [...deps]:[])
  return {data, error, isLoading}
}
export default useData