---
id: sequencers-cm-layer
title: Sequencers / CM Layer
---

# Sequencers / CM Layer

The CM (Cross-Message) layer is a peer-to-peer network consisting of sequencers.

- **Sequencer**: An entity that forms two transaction trees—one for TON and the other for EVM. The transaction tree is a Merkle tree, created based on log messages from the TON side and events from the EVM side.

- **Functionality**: Sequencers use data from smart contracts (a part of the execution layer) and collect transactions received over a time period *T* (a global setting for the network).

- **Transaction Trees**: These are Merkle trees that are essential for cross-chain message verification and consensus.
