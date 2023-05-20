'use client';

const connectWalletHandler = () => {
  alert('connect wallet')
}

export default function ConnectWalletButton({ children }) {
  return (
    <button onClick={connectWalletHandler} className="button is-primary">Connect Wallet</button>
  )
}