import { useEffect,useState } from "react";
//https://api.themoviedb.org/3/discover/movie?api_key=47007f73f8047939723edd20cf8de68f&sort_by=popularity.desc&page=1

export const useFetch =  ( url ) =>{
     const [state, setState] = useState({loading : true, data: null , error: null})

     

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setState({
                loading: false,
                data: data,
                error:null
            });
        })
        .catch((e)=>{
            setState({
                loading:false,
                data:null,
                error: true
            })
        })
        return  setState({loading :true, data: null , error: null})
        

    },[url])

    return state;
}   