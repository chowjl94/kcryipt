import dumydata from "../utils/dummydata"
import { TransactionsContext } from "../context/TransactionContext"
import { useContext } from "react"



const TransactionCard = ({url, message,timestamp,addressFrom, amount, addressTo }) => (
    <div className="flex flex-col justify-start items-start blue-glassmorphism p-3 cursor-pointer hover:shadow-xl ">
        <div className="flex flex-col items-center w-full mt-3 bg-black rounded-md">
            <p className="text-white text-base">{timestamp}</p>
        </div>
      <div className="ml-5 flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
        <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From : {`${addressFrom.slice(0,5)} ... ${addressFrom.slice(addressFrom.length-5)}`}</p>
          </a>

          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From : {`${addressTo.slice(0,5)} ... ${addressTo.slice(addressTo.length-5)}`}</p>
          </a>

          <p className="text-white text-base">Amount : {amount}</p>
          {message && (
            <>
            <br></br>
            <p className="text-white text-base">Message : {message}</p>
            </>
          )}
        </div>
      </div>
      <img src={url} alt='gif' className="w-full sm:h-32 2xL:h-96 rounded-md shadow-lg object-cover"></img>



    </div>
  );


const Transactions = () =>{
    const {account} = useContext(TransactionsContext)

    return(
        <div className="ml-3 py-3 px-3 flex flex-col items-center justify-center">
            {account?
                    <h3 className="text-white text-xl md:text-md py-3">Latest transactions</h3>
                    :
                    <h3 className="text-white text-xl md:text-md py-3">Connect Account To See Transactions</h3>
                    }

            <div className="ml-3 py-3 px-3 container w-10/12 blue-glassmorphism"> 
                <div className="grid grid-cols-3 px-3 py-3 gap-3">
                    {dumydata.reverse().map((tx,i)=>(
                        <TransactionCard key={i} {...tx}></TransactionCard>
                    ))}
                    {/* <TransactionCard></TransactionCard> */}
                </div>
                
                
            
            </div>
        </div>
    )
}

export default Transactions