import { useEffect, useState } from "react"

export const useFetchData=(url)=>{
    const [data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

    const fetchData=async()=>{
        try {
            setLoading(true)
            const res=await fetch(url);
            const json=await res.json();
            setData(json.products)

            setLoading(false)
        } catch (error) {
            setLoading(false);
            setError(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return {data,loading,error}
}