import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import React, { useState , useContext } from 'react';
import logo from '../images/logo.png'
import { TransactionsContext } from "../context/TransactionContext"


const Item = ({title, classProps})=>{
    return(
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () =>{
    const [toggle, setToggle] = useState(false)
    return(
        <nav className='w-full flex md:justify-center justify-between items-center py-4'> 
            <div className='md:flex-[0.5] flex-intial justify-center items-center '>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'></img>
            </div>
            <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {['Market','Exchange','Wallets'].map((i,index)=>(
                    <Item key={i+index} title={i}></Item>
                ))}

                {/* <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li> */}
            </ul>

            <div className='flex relative'>
                {toggle?
                    <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggle(false)}></AiOutlineClose>
                    :
                    <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggle(true)}></HiMenuAlt4>
                }

                {
                    toggle && (
                        <ul className='z-10 fixed top-0 -right-2 p-3 w-[30vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                        >
                            <li className='text-xl w-full my-2 cursor-pointer' >
                                <AiOutlineClose onClick={()=>setToggle(false)}></AiOutlineClose>
                            </li>
                            {['Market','Exchange','Wallets'].map((i,index)=>(
                                <Item key={i+index} title={i} classProps='my-'></Item>
                            ))}
                        </ul>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar