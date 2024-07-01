import { useQuery } from "@tanstack/react-query"
import APIClient from "../services/api-client";
import platforms from '../data/platforms'

const apiClient= new APIClient<Platform>('/platforms/lists/parents')
export interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlatform=()=>useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    initialData: {count: platforms.length, results: platforms, next: null}
})
export default usePlatform