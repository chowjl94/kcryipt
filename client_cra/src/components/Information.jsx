
import React from "react";
import {TbArrowBigRightLines} from 'react-icons/tb'


const InfoCard = ({ stepnum, stepinstruction }) => (
    <div className="flex flex-col justify-start items-center p-3 m-2">
      <div className={`w-10 h-10 rounded-full flex flex-col justify-center items-center white-glassmorphism text-white`}>
        {stepnum}
      </div>
      <div className="flex flex-col flex-1 items-center text-ellipsis">
        <h3 className="mt-2 h-9 text-center text-ellipsis text-white lg md:w-9/12">{stepinstruction}</h3>
        </div>
        {/* <div className="flex flex-col flex-1 items-center text-ellipsis">
        <p className="mt-3 text-center text-ellipsis text-white text-sm md:w-9/12">
          {}
        </p>
      </div> */}
    </div>
  );

const Information = () =>{
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col px-5 md:mr-10">
                    <h1 className="text-xl sm:text-3xl text-white text-gradient py-1"> 
                        <div>
                            Use Krypt in 4 steps
                            <br></br>
                        </div>  
                    </h1>
                    <br></br>
                    <div className="flex flex-row px-3 py-3 gap-3 items-center">
                        <InfoCard stepnum='1' stepinstruction='Connect metamask wallet'/>
                        <div className={`w-10 h-10 rounded-full flex flex-col justify-center items-center white-glassmorphism text-white`}>
                            <TbArrowBigRightLines fontSize={21} className="text-white"></TbArrowBigRightLines>
                        </div>
                        <InfoCard stepnum='2' stepinstruction='Input wallet address and amount'/>
                        <div className={`w-10 h-10 rounded-full flex flex-col justify-center items-center white-glassmorphism text-white`}>
                            <TbArrowBigRightLines fontSize={21} className="text-white"></TbArrowBigRightLines>
                        </div>
                        <InfoCard stepnum='3' stepinstruction='Press send'/>
                        <div className={`w-10 h-10 rounded-full flex flex-col justify-center items-center white-glassmorphism text-white`}>
                            <TbArrowBigRightLines fontSize={21} className="text-white"></TbArrowBigRightLines>
                        </div>
                        <InfoCard stepnum='4' stepinstruction='View your past transactions'/>                   
                    </div>

                        
                    
                </div>
            </div>
        </div>
    )
}

export default Information