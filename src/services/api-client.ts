import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T>{
    count: number;
    next: string| null;
    results: T[]
}


const axiosInstanct = axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "c4c3ad64be144c45b0d782127e601897"
    }
})

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint=endpoint
    }
    getAll=(config: AxiosRequestConfig)=>{
        return axiosInstanct.get<FetchResponse<T>>(this.endpoint, config).then(res=>res.data)
    }
}
export default APIClient