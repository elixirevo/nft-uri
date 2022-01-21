import { ethers } from 'ethers';
import ABI from '../../abi/abi.json';

const V0CA = '0xab150409b6177bFC42d926dE9d74E9B848aFA257';
const klaytnRPC = 'https://public-node-api.klaytnapi.com/v1/cypress';
const provider = new ethers.providers.JsonRpcProvider(klaytnRPC);
export const V0Contract = new ethers.Contract(V0CA, ABI, provider);
