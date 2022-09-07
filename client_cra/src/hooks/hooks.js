import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY


const useFetch = (keyword) =>{
    const [gif, setGif] = useState("");
    const fetchGif = async ()=>{
        try{
            if(keyword){
                const res =  await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1&offset=0&rating=g&lang=en`)
                const {data} = await res.json()
                setGif(data[0]?.images?.downsized_medium?.url)
            }else{
                console.log('Empty Keyword setting Default GIf')
                setGif('https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif')
            }

        }catch(error){
            console.log('Error in fetch ,Seeting Default GIf')
            setGif('https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif')
        }
    }

    useEffect(()=>{
        if(keyword) fetchGif()
    },[keyword])

    return gif
}
export default useFetch