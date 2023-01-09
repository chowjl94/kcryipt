import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { TransactionsContext } from "../context/TransactionContext";

interface Inputs{
  placeholder:string,
  name:string,
  type:string,
  value?:number,
  handleChange(e:React.ChangeEvent<HTMLInputElement>,name:string):(void),
}



const gridstyle =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const Input = ({ placeholder,name,type,value,handleChange }:Inputs) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e)=>handleChange(e,name)}
      className="my-2 w-full rounded-sm p-2 outline-none text-white text-sm blue-glassmorphism bg-transparent hover:bg-[#2546bd]"
    />
  );
};

const Welcome  = () => {
  const TxtionContext = useContext(TransactionsContext);

  const handleSubmit = (e:React.MouseEvent<HTMLElement>) => {
    if (!TxtionContext?.account) {
      alert("Please Connect Wallet");
      return;
    }
    const { addressTo, amount, gif, messageTo } = TxtionContext.formData;
    e.preventDefault();
    if (!addressTo || !amount || !gif || !messageTo) {
      alert("confirm ?");
    }
    TxtionContext.sendTransaction();
  };

  // console.log(connectWallet)
  console.log(TxtionContext?.account);
  return (
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

          {!TxtionContext?.account ? (
            <button
              type="button"
              onClick={TxtionContext?.connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3 cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold ">
                Connect Wallet
              </p>
            </button>
          ) : (
            <div className="hover:default flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3">
              <p className="text-white text-base font-semibold ">
                Wallet Connected
              </p>
            </div>
          )}

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
                  {TxtionContext?.account ? (
                    <a
                      href={`https://goerli.etherscan.io/address/${TxtionContext?.account}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsInfoCircle></BsInfoCircle>
                    </a>
                  ) : (
                    <BsInfoCircle></BsInfoCircle>
                  )}
                </div>

                {TxtionContext?.account ? (
                  <p className="font-semibold text-sm">
                    Meta Mask Account :<br></br>
                    {`${TxtionContext?.account.slice(0, 5)} ... ${TxtionContext?.account.slice(
                      TxtionContext?.account.length - 5
                    )}`}
                  </p>
                ) : (
                  <p className="font-semibold text-sm">
                    Meta Mask Account :<br></br>_ _ _ _ _
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={TxtionContext?.handleChange}
            />
            <Input
              placeholder="Amount"
              name="amount"
              type="number"
              handleChange={TxtionContext?.handleChange}            
            />
            <Input
              placeholder="Gif"
              name="gif"
              type="text"
              handleChange={TxtionContext?.handleChange}            
            />
            <Input
              placeholder="Message To"
              name="messageTo"
              type="text"
              handleChange={TxtionContext?.handleChange}            
            />
            <div className="h-[2px] w-full bg-gray-400 my-2"></div>
            {TxtionContext?.isTrxLoading ? (
              <Loader></Loader>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                {" "}
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
