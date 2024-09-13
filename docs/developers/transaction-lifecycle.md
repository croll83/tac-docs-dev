---
id: transaction-lifecycle
title: TAC Transaction Lifecycle
---

# TAC Transaction Lifecycle

1. **Initialization**: A dApp proxy (which the user interacts with) sends assets with parameters for a cross-chain operation. On the TON side, a log message is created, and on the Layer 2 side, an Action event is generated.

2. **Event Detection**: Sequencers index new events and store them in a local database.

3. **Root Hash Formation**: Every *X* minutes (or seconds, depending on the DAO settings), a Merkle tree is formed, resulting in a root hash that will be used in the consensus.

4. **Consensus**: Each group of sequencers forms its own tree, then sends it to a contract where it is expected that the other groups of sequencers will upload the exact same tree.

5. **Finalization**: When the tree with the required transaction is uploaded, it can be executed. To do this, you need to call the contract's receive method on the cross-chain layer and pass the parameters with which the transaction was created, along with the hashes of neighboring branches of the Merkle tree. After that, the contract will execute it.

6. **Transaction Rollback**: The transaction may fail for various reasons (e.g., insufficient gas). In such cases, sequencers should collect a list of unexecuted transactions, form a tree from them, and upload it to the layer to allow their rollback.

7. **Commission Distribution**: The commission is distributed at the end of the sequencer round. All transactions at the moment of initiation include a commission (or it is taken from the amount transferred in the transaction to initiate the cross-chain message).
