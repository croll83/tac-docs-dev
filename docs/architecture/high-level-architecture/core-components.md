---
id: core-components
title: TAC Core Components
---

# TAC Core Components

The TAC high-level architecture consists of the following core components:

- **Cross-Chain Layers (TON and EVM Parts)**: A set of smart contracts for execution (call, mint, unlock operations), data availability, consensus, elections, etc., on both the TON and EVM sides.

- **Sequencers**: A decentralized and off-chain network based on Proof of Stake (PoS).

- **dApp Proxies**: Lightweight proxy smart contracts for each dApp, deployed on TVM and EVM. They process calls between the execution layer and the dApp on TAC and between the execution layer and the TON wallet on TON.

- **TAC Ecosystem Layer**: Decentralized applications deployed on the EVM.
