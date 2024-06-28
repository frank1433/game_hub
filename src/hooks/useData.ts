
import { useState, useEffect } from "react"
import apiClient from '../services/api-client'
import { AxiosRequestConfig, CanceledError } from "axios"

interface fetchResponse<T>{
    count: number
    results: T[]
}

const useData=<T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[])=>{
 const [data, setData] = useState<T[]>([])
  const [error, setError]= useState('')
  const [isLoading, setLoading] = useState(false)
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