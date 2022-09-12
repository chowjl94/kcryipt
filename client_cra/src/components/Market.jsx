import React from "react"


const Market = () =>{

    return(
        <div className="flex w-full h-screen justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col px-5 md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1"> 
                        
                        <div>
                            Market Place Coming Soon!
                        </div>  
                    </h1>
                    <br></br>
                    {/* <p className="text-left mt-0.5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Make peer to peer transactions anytime, anywhere with anyone 
                    </p> */}
                    </div>               

            </div>
        </div>
    )
}

export default Market
