import { ethers } from 'ethers';
import ABI from './ABI.json';

const CONTRACT_ADDRESS = `${process.env.CONTRACT_ADDRESS}`

export type Club = {
  cnpj: string;
  clubName: string;
  owner: BigInt; // endereço da carteira
  id: number;
}

export type Reserve = {
  owner: BigInt;
  peopleQuantity: number;
  totalValue: BigInt;
  date: number;
  reservedTime: number;
  tickets: BigInt[]; // array de endereços de carteiras
}

function getProvider(): ethers.BrowserProvider {
  if (!window.ethereum) throw new Error('No MetaMask found!');
  return new ethers.BrowserProvider(window.ethereum);
}

function getContract(provider?: ethers.BrowserProvider): ethers.Contract {
  if (!provider) provider = getProvider();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI as any, provider);
}

async function getContractSigner(provider?: ethers.BrowserProvider): Promise<ethers.BaseContract> {
  if (!provider) provider = getProvider();
  const signer = await provider.getSigner(localStorage.getItem("account") ?? undefined);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI as any, provider);
  return contract.connect(signer);
}

export async function getAddress(): Promise<string> {
  const contract = getContract();
  return contract.getAddress();
}

export async function doLogin(): Promise<string> {
  const provider = getProvider();
  const accounts = await provider.send('eth_requestAccounts', []);
  if (!accounts?.length) throw new Error('Wallet not allowed!');
  return accounts[0]
}

// Club functions

export async function addClub({ clubName, cnpj, owner, id }: Club): Promise<ethers.Transaction> {
  const contract = await getContractSigner() as any;
  // Ter que ver qual é o nome do método que está definido no contrato e por sua vez no ABI.json
  return contract.newClub(clubName, cnpj, owner, id) as ethers.Transaction;
}

// Reservation function

export async function addReserve({ owner, peopleQuantity, totalValue, date, reservedTime, tickets }: Reserve): Promise<ethers.Transaction> {
  const contract = await getContractSigner() as any;
  // Tem que ver qual é o nome do método que está definido no contrato e por sua vez no ABI.json
  return contract.newReserve(owner, peopleQuantity, totalValue, date, reservedTime, tickets) as ethers.Transaction;
}