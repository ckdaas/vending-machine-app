'use client';
import Web3 from 'web3'

let web3

const connectWalletHandler = async () => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      web3 = new Web3(window.ethereum)
    } catch (err) {
        console.log(err.message)
    }
    
  } else {
    //MetaMask not installed
    console.log("Please install MetaMask")
  }
}

export default function ConnectWalletButton({ children }) {
  return (
    <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
  )
}