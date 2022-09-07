import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from 'react-icons/bs'
import React, { useContext } from "react"
import Loader from './Loader'
import { TransactionsContext } from "../context/TransactionContext"

const gridstyle = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"

const Input = ({placeholder,name,type,value,handleChange}) =>{
    return(
        <input 
            placeholder={placeholder}
            type={type}
            step='0.0001'
            value={value}
            onChange={(e)=>handleChange(e,name)}
            className='my-2 w-full rounded-sm p-2 outline-none text-white text-sm blue-glassmorphism bg-transparent hover:bg-[#2546bd]'
         />
    )
}



const Welcome = () =>{
    const { connectWallet, account,formData ,handleChange, sendTransaction,isTrxLoading } = useContext(TransactionsContext)
    
    const handleSubmit = (e) =>{
        const {addressTo,amount,gif,messageTo} = formData;
        e.preventDefault()
        if(!addressTo || !amount || !gif || !messageTo) {
            alert('missing fields')
        }
        console.log(formData)
        sendTransaction()
    }

    // console.log(connectWallet)
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col px-5 md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1"> 
                        
                        <div>
                            Crypto transactions
                            <br></br>
                            Anywhere , Anytime
                        </div>  
                    </h1>
                    <br></br>
                    <p className="text-left mt-0.5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Make peer to peer transactions anytime, anywhere with anyone 
                    </p>

                    {
                        !account
                        ?
                        <button type='button' onClick={connectWallet} className='flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3 cursor-pointer hover:bg-[#2546bd]'>
                            <p className="text-white text-base font-semibold ">Connect Wallet</p>
                        </button>
                        :
                        <button type='button' className='flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3'>
                            <p className="text-white text-base font-semibold ">Wallet Connected</p>
                        </button>
                    
                    }

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${gridstyle}`}>Peer to Peer</div>
                        <div className={`${gridstyle}`}>Secure</div>
                        <div className={`rounded-tr-2xl ${gridstyle}`}>World Wide</div>
                        <div className={`rounded-bl-2xl ${gridstyle}`}>ETH</div>
                        <div className={`${gridstyle}`}>BTC</div>
                        <div className={`rounded-br-2xl ${gridstyle}`}>SOL</div>
                    </div>
                    </div>

                <div className="flex flex-col">
                    <div className="flex flex-col flex-1 px-5 items-center justify-center w-full md:mt-0 mt-10">
                        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                            <div className="flex justify-between flex-col w-full h-full">
                                <div className="flex justify-between items-start">
                                    <div className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center ">
                                        <SiEthereum></SiEthereum>
                                    </div>
                                    <BsInfoCircle></BsInfoCircle>
                                </div>
                                
                                {account
                                    ?
                                    <p className="font-semibold text-sm">
                                         Meta Mask Account :<br></br>
                                         {`${account.slice(0,5)} ... ${account.slice(account.length-5)}`}
                                    </p>
                                    :
                                    <p className="font-semibold text-sm">
                                         Meta Mask Account :<br></br>
                                        _ _ _ _ _
                                    </p>

                                }
                            </div>
                        </div>
                    </div>

                    <div className="p-5 sm:w-96 flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder="Address To" name='addressTo' type='text' handleChange={handleChange}/>                        
                        <Input placeholder="Amount" name='amount' type='number' handleChange={handleChange}/> 
                        <Input placeholder="Gif" name='gif' type='text' handleChange={handleChange}/> 
                        <Input placeholder="Message To" name='messageTo' type='text' handleChange={handleChange}/> 
                        <div className="h-[2px] w-full bg-gray-400 my-2"></div>
                        {isTrxLoading
                                ?
                                (<Loader></Loader>)
                                :
                                (<button type="button" onClick={handleSubmit} className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]'> Send Now</button>)}
                    </div>
                </div>


                

            </div>
        </div>
    )
}

export default Welcome
