import { ethers } from 'ethers';
import ABI from '../../abi/abi.json';

const V1CA = '0xab150409b6177bFC42d926dE9d74E9B848aFA257';
const ethereumRPC =
  'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const provider = new ethers.providers.JsonRpcProvider(ethereumRPC);
export const V1Contract = new ethers.Contract(V1CA, ABI, provider);
