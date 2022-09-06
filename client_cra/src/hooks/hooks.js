import { useEffect, useState } from "react";
const API_KEY = import.meta.env.REACT_GIPHY_API

const useFetch = ({keyword}) =>{
    const [gif, setGif] = useState("");

    const fetchGif = async ()=>{
        try{
            const res =  await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1&offset=0&rating=g&lang=en`)
            const {data} = await res.json()
            setGif(data[0]?.images?.downsized_medium?.url)

        }catch(error){
            setGif('https://media2.giphy.com/media/l1L2UkgpuiE4U/giphy.gif?cid=fc1fcc5f62spbjbtd1dvm2uvnq0fl89u2tgnrybktfk918kd&rid=giphy.gif&ct=g')
        }
    }

    useEffect(()=>{
        if(keyword) fetchGif()
    },[keyword])

    return gif
}
export default useFetch