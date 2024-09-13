---
id: executor-selection
title: Executor Selection
---

# Executor Selection

An **executor** is a sequencer selected to execute a certain transaction in a given execution round.

## Selection Process

- **Random Selection**: For each transaction, a sequencer is randomly selected proportionally to its collateral share. The higher the collateral of the sequencer, the more often it is appointed to execute transactions and the greater its reward at the end of the round.

- **Off-Chain Algorithm**: The selection of a sequencer for transaction execution occurs off-chain using the algorithm described below.

## Technical Details

- **Any Account Can Execute**: Technically, any account (not only the sequencer selected by the algorithm) can initiate the execution of any transaction if it provides the cross-chain layer with the appropriate correct proof.

- **No Security Risks**: This does not entail any risks or security issues since the executor will have to execute transactions at their own expense, and the execution reward is accrued proportionally to the sequencers' collateral, even if their work was performed by someone else.

## Executor Selection Algorithm

The process includes three stages:

1. **Collateral Re-Evaluation Round**:
   - **Periodicity**: Approximately every 18-72 hours, depending on the duration of blockchain validation rounds.
   - **Process**: Collateral of each sequencer is updated in a special `StakeVault` contract. Collateral can be partially or fully withdrawn at the end of a round or replenished.

2. **Merkle Tree Assembly**:
   - **Periodicity**: Approximately every 5 minutes, regulated by the TAC sequencer configuration.
   - **Process**: Regular reassembly of the Merkle tree for new transactions occurs, followed by updating the Merkle root in the `CrossChainLayer` contract through consensus between groups and within groups.

3. **Execution Phase**:
   - **Periodicity**: Approximately every 5 minutes, regulated by the TAC sequencer configuration.
   - **Process**: Includes the algorithm for determining the executor and executing new transactions.

**Stages 1-3 are repeated in parallel and independently of each other.**

## Determining the Executor

Each sequencer takes the Merkle root, data on all active sequencers, and the transactions that need to be executed. For each message, the executor is determined by the formula:

$$
\sum_{i=1}^{j-1} c_i < c \leq \sum_{i=1}^{j} c_i
$$

- **Where**:
  - \( c_i \): Collateral of the \( i \)-th sequencer.
  - \( c \): Random number from 0 to the total collateral, taken from the Merkle root as a random seed.
  - \( j \): Index of the appointed executor.

- **Determinism**: This approach achieves determinism of executor selection across different nodes.

- **Probability Proportional to Collateral**: Sequencers with higher collateral are more likely to be selected as executors.

## Execution and Rewards

- **Self-Execution**: If it turns out that the executor found according to the formula is the sequencer itself, it begins to execute the current transaction by forming and sending the corresponding message to the `CrossChainLayer`, providing the actual Merkle proof it has.

- **Reward Distribution**:
  - The reward at the end of the round is distributed among all sequencers proportionally to their collateral, provided they were not penalized for non-execution.
  - It is more profitable for sequencers appointed by the algorithm to execute transactions.
