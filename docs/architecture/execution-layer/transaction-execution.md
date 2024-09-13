---
id: transaction-execution
title: Transaction Execution
---

# Transaction Execution

The transaction execution consists of two steps:

## 1. Preparation of Data at the Sequencer Level

The sequencer must prepare and send the following data to the corresponding smart contract method `CrossChainLayer.receiveMessage()`:

```json
{
  "message": {
    "timestamp": uint32,          // Transaction timestamp committed in TON blockchain
    "target": "address",          // Address of the called smart contract
    "methodName": "string",       // Method of the called smart contract
    "arguments": "bytes",         // Arguments of the called smart contract
    "caller": "string",           // Address of the smart contract or wallet that initiated the cross-chain operation
    "mint": "TokenAmount",        // Tokens locked on the TON blockchain
    "unlock": "TokenAmount"       // Tokens burned on the TON blockchain
  },
  "merkleProof": "bytes",         // Merkle tree hashes needed to gather proof
  "value": "uint256"              // Ether attached to the message
}
