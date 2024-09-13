---
id: transaction-rollback
title: Transaction Rollback
---

# Transaction Rollback

To enhance the user experience, we assume that rollbacks should not occur, as we either subsidize the gas or make it constant.

## Failure Scenarios

- **Example**: In some DeFi applications, an operation cannot be completed (e.g., the price of an asset has changed, and it is impossible to cover the debt at that price).

## Rollback Process

- **Asset Return**: If the failure occurs, the locked/burned tokens will be returned to the sender, and the transaction will not be forwarded to another layer.

- **Initiating Rollback**: To roll back the transaction, its parameters need to be sent to a special smart contract.

- **Sequencer Role**: Sequencers will collect such transactions for rollback into a Merkle tree for execution.

## Execution Steps

The execution process is similar to the standard transaction execution:

1. **Ensuring Non-Inclusion**: To roll back a transaction, it is necessary to ensure that it is not present in the Merkle tree of cross-chain operations to avoid double-spending.

2. **Rollback Tree Formation**:

   - **Stage 1**: Sequencers form the tree of cross-chain operations and exclude transactions that need to be rolled back. Transactions needing rollback are not included in this tree to prevent double-spending of funds.

   - **Stage 2**: Sequencers form a new tree with cross-chain operations and add the cancellable messages to it. Then, the sequencer can proceed with it and return the assets to the user.
