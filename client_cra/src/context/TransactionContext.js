import React, { useEffect, useState } from "react";
import { ethers } from 'ethers';

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionsContext = React.createContext()

// destructuring ethereum
const { ethereum } = window;

const getEthereumContract = () =>{
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const TransactionsContract = new ethers.Contract(contractAddress,contractABI, signer)
    console.log({provider,signer, TransactionsContract})
    return TransactionsContract

}



export const TransactionsProvider = ({children})=>{
    const [isTrxLoading, setisTrxLoading] = useState(false)
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [account , setAccount]= useState('')
    const [formData, setFormData] = useState({addressTo:'',amount:'',gif:'',messageTo:''})

    const handleChange = (e,name) =>{
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))

    }

    const checkConnect = async () =>{
        try{
            if(!ethereum) return alert('Meta mask not installed')
            const accounts = await ethereum.request({method:'eth_accounts'})
            if(account.length !== 0){
                setAccount(accounts[0])
                //get all transaction
                console.log('account connected')
            }else{
                console.log('No account found')
            }
        }catch(error){
            console.log(error)
            throw new Error('No eth object')
        }

    }

    const connectWallet = async() =>{
        try{
            if(!ethereum) return alert('Meta mask not installed')
            const accounts = await ethereum.request({method:'eth_requestAccounts'})
            setAccount(accounts[0])
            console.log(accounts[0])
        }catch(error){
            console.log(error)
            throw new Error('No eth object')
        }
    }

    const sendTransaction = async()=>{
        try{
            if(!ethereum) return alert('Meta mask not installed')
            const {addressTo, amount,gif,messageTo} = formData;
            const transactionContract = getEthereumContract()
            const amtInGwei = ethers.utils.parseEther(amount)._hex // parse decimal to hex 

            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:account,
                    to:addressTo,
                    gas: '0x5208', //21000 gwei
                    value: amtInGwei 
                }]
            })
            const transactionID = await transactionContract.addtoChain(addressTo,amtInGwei,messageTo,gif)
            setisTrxLoading(true)
            console.log(`Transaction Hash : ${transactionID.hash} is loading` )
            await transactionID.wait()
            setisTrxLoading(false)
            console.log(`Transaction Hash : ${transactionID.hash} is finished` )

            const trxCount = await transactionContract.getTransactionsCount()
            setTransactionCount(trxCount.toNumber())
        }catch(error){
            console.log(error)
            throw new Error('No eth object')
        }
    }

    useEffect(()=>{
        checkConnect()
    },[])

    return (
        <TransactionsContext.Provider value={{connectWallet, account,formData,setFormData,handleChange,sendTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}