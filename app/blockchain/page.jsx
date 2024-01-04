'use client'
import Web3 from 'web3'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

const WalletPage = ()=>{
  const connect = ()=>{
  }
  return (
    <>
    <div className="mx-auto">
      <button onClick={()=>connect()}>
        Connect Your Wallet
      </button> 
    </div>
    </>
  )
}

export default WalletPage;