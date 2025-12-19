import { BrowserProvider, Contract } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./constants";

export async function getContract() {
  if (!window.ethereum) {
    alert("MetaMask not installed");
    return null;
  }

  await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new Contract(CONTRACT_ADDRESS, ABI, signer);
}
