---
id: cross-chain-messages-validation-and-security
title: Cross-Chain Messages Validation and Security
---

# Cross-Chain Messages Validation and Security

## Potential Issues

- **Fake Parameters**: A user can send a message with fake parameters about the transfer of an asset to the smart contract (`TON.CrossChainMessage`), without actually transferring any assets.

## Mitigation Strategies

- **Sequencer Validation**:
  - Sequencers index and validate assets that were actually transferred.
  - Only after validation is the data added to the cross-chain message.

- **Asset Verification**:
  - If the number of assets in the message does not match the number of transferred assets, the target contract will not be able to spend more assets than were actually transferred.

## System Safeguards

- **Prevention of Discrepancies**: The system ensures protection against discrepancies in the number of assets.
- **Error and Abuse Prevention**: Prevents potential errors or abuses by validating asset transfers before execution.
