---
id: sample-tac-scenario
title: Sample TAC Scenario
---

# Sample TAC Scenario

1. **User Interaction**: The user makes a transaction through the TON wallet by connecting it to the dApp proxy.

2. **Cross-Chain Transaction**: The TON dApp proxy builds a cross-chain transaction, transferring assets to the bridge wallet smart contract (a part of the execution process).

3. **Message Sequencing**: The bridge wallet sends a message to the messaging layer for sequencing.

4. **Sequencer Activity**: Sequencers collect received messages, form a Merkle tree, and send it to L2.

5. **Verification and Processing**: Once the tree is verified and loaded, executors start processing it.

6. **Transaction Execution**: The transaction is checked to ensure it is in the tree, and the bridged assets are sent to the dApp proxy contract, then its method is invoked.

7. **dApp Interaction**: The dApp proxy interacts with Curve. A swap happens.

8. **Cross-Chain Return**: When the dApp proxy receives the assets, it builds a cross-chain transaction to send to L1.

9. **Sequencer Collection**: Sequencers collect the tree and send it on L1.

10. **Finalization**: Once the tree is verified and loaded, executors start processing it, minting the target wrapped token.

11. **User Receives Token**: The user receives the token in their TON wallet.
