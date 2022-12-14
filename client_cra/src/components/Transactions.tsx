import { TransactionsContext } from "../context/TransactionContext";
import { useContext } from "react";
import useFetch from "../hooks/hooks";

interface TransactionCardInterface{
  gif:any,
  message:string,
  timestamp:string,
  addressFrom:string,
  amount:string,
  addressTo:string
}

const TransactionCard = ({
  gif,
  message,
  timestamp,
  addressFrom,
  amount,
  addressTo,
}:TransactionCardInterface) => {
  
  const gifUrl = useFetch(gif);

  return (
    <div className="flex flex-col justify-start items-start blue-glassmorphism p-2 hover:shadow-xl ">
      <div className="flex flex-col items-center w-full mt-3 bg-black rounded-md">
        <p className="text-white text-base">{timestamp}</p>
      </div>
      <div className="ml-2 flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a
            href={`https://goerli.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base hover:underline">
              From :{" "}
              {`${addressFrom.slice(0, 5)} ... ${addressFrom.slice(
                addressFrom.length - 5
              )}`}
            </p>
          </a>

          <a
            href={`https://goerli.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-base hover:underline">
              To :{" "}
              {`${addressTo.slice(0, 5)} ... ${addressTo.slice(
                addressTo.length - 5
              )}`}
            </p>
          </a>

          <p className="text-white text-base">Amount : {amount}</p>

          <>
            <br></br>
            <p className="text-white text-base">
              Message : {message ? message : ""}
            </p>
          </>
        </div>
      </div>
      <div className="w-full sm:h-32 2xL:h-96 rounded-md shadow-lg object-cover">
        <img
          src={
            gif
              ? gifUrl
              : "https://acegif.com/wp-content/uploads/gif-shaking-head-38.gif"
          }
          alt="gif"
          className="w-full sm:h-32 2xL:h-96 rounded-md shadow-lg object-cover vertical-align: bottom;"
        ></img>
      </div>
    </div>
  );
};

const Transactions = () => {
  const TxtionContext = useContext(TransactionsContext);
  return (
    <div className="ml-3 py-3 px-3 flex flex-col items-center justify-center">
      {TxtionContext?.account ? (
        <h3 className="text-white text-xl md:text-md py-3">
          Latest transactions
        </h3>
      ) : (
        <h3 className="text-white text-xl md:text-md py-3">
          Connect wallet to see transactions
        </h3>
      )}

      <div className="ml-3 py-3 px-3 container w-10/12 blue-glassmorphism">
        <div className="grid grid-cols-3 px-3 py-3 gap-3">
          {TxtionContext?.tranxes.reverse().map((tx, i) => (
            <TransactionCard key={i} {...tx}></TransactionCard>
          ))}
          {/* <TransactionCard></TransactionCard> */}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
