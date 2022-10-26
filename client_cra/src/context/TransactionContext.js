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
    return TransactionsContract

}



export const TransactionsProvider = ({children})=>{
    const [isTrxLoading, setisTrxLoading] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [account , setAccount]= useState('')
    const [formData, setFormData] = useState({addressTo:'',amount:'',gif:'',messageTo:''})
    const [tranxes, setTranxes] = useState([])

    const handleChange = (e,name) =>{
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))
        console.log(e.target.value)
    }

    const checkConnect = async () =>{
        console.log('checking for connection')
        try{
            if(!ethereum) return alert('Meta mask not installed')
            const accounts = await ethereum.request({method:'eth_accounts'})
            if(accounts.length){
                setAccount(accounts[0])
                getTransactions()
                console.log('account connected')
            }else{
                console.log('No account found')
            }
        }catch(error){
            console.log(error)
            throw new Error('No eth object')
        }

    }

    const checkTransactions = async ()=>{
        console.log('checking Transactions')
        try{
            const transactionContract = getEthereumContract()
            const trxCount = await transactionContract.getTransactionsCount()
            localStorage.setItem('transactioncount',trxCount)
        }catch(error){
            console.log(error)
            throw new Error('No eth object')

        }
    }

    const getTransactions = async ()=>{
        try{
            if(!ethereum) return alert('Meta mask not installed')
            const transactionContract = getEthereumContract()
            const trxes = await transactionContract.getTransactions()
            console.log(trxes)
            const trxData = trxes.map((t)=>({
                addressTo: t.receiver,
                addressFrom:t.sender,
                timestamp: new Date(t.timestamp * 1000).toLocaleString(),
                message:t.keyword,
                gif:t.keyword,
                amount: parseInt(t.amount)/(10**18)
            }))
            // console.log(trxData)
            setTranxes(trxData)
        }catch(error){
            console.log(error)
        }
    }

    const connectWallet = async() =>{
        try{
            if(!ethereum) return alert('Meta mask not installed')
            const accounts = await ethereum.request({method:'eth_requestAccounts'})
            setAccount(accounts[0])
            alert(`wallet connected`)
            window.location.reload()
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
            window.location.reload()
        }catch(error){
            console.log(error)
            throw new Error('No eth object')
        }
    }

    useEffect(()=>{
        checkConnect()
        checkTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <TransactionsContext.Provider value={{connectWallet, account,formData,isTrxLoading,tranxes,setFormData,handleChange,sendTransaction,ethereum}}>
            {children}
        </TransactionsContext.Provider>
    )
}