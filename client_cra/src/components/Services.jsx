import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-col justify-start items-center white-glassmorphism p-3 m-2 hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex flex-col justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col flex-1 items-center text-ellipsis">
        <p className="mt-2 text-center text-ellipsis text-white text-lg md:w-9/12">{title}</p>
        <p className="mt-1 text-center text-ellipsis text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );

const Services = () =>{
    return(

        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col px-5 md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1"> 
                        
                        <div>
                            Our Services
                            <br></br>
                            
                        </div>  
                    </h1>
                    <br></br>
                    <div className="grid grid-flow-row grid-row-3 justify-start items-center">
                    <ServiceCard
                        color="bg-[#2952E3]"
                        title="Security gurantee"
                        icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                        subtitle="Secure transaction guranteed"
                        />

                    <ServiceCard
                        color="bg-[#e32929]"
                        title="Fast Transactions"
                        icon={<BiSearchAlt fontSize={21} className="text-white" />}
                        subtitle="Fast transactions with low wait time"
                        />
                        
                    <ServiceCard
                        color="bg-[#2fe329]"
                        title="Anywhere, Anytime, Anyone"
                        icon={<BsGlobe2 fontSize={21} className="text-white" />}
                        subtitle="Make transactions 24/7 anywhere, with anyone"
                        />

                    </div>

                        
                    
                </div>
            </div>
        </div>
    )
}

export default Services