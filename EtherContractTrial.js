const { ethers } = require("ethers");
const express = require("express");
const app = express();
const provider = ethers.getDefaultProvider('ropsten');

// const signer = provider.getSigner()

const contractAddress = "0x4c96Ac9436E3b32a5E004B79eBa2f09853fc7D91";
const contractAbi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "A", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "B", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "contestant", "type": "string" }], "name": "Vote", "outputs": [{ "internalType": "string", "name": "s", "type": "string" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "check", "outputs": [{ "internalType": "address", "name": "person", "type": "address" }, { "internalType": "string", "name": "voteGiven", "type": "string" }], "stateMutability": "view", "type": "function" }];
const connectContract = new ethers.Contract(contractAddress, contractAbi, provider);


async function candidateA() {
    const valueA = await connectContract.A();
    console.log(valueA.toString());
    return valueA.toString();
}
async function candidateB() {

    const valueB = await connectContract.B();
    console.log(valueB.toString());
    return valueB.toString();
}
app.get('/getCandidateA', (req, res) => {
    res.send(candidateA());
});
app.get('/getCandidateB', (req, res) => {
    res.send(candidateB());
});

app.listen(3000, () => console.log('Lets Begin'));
