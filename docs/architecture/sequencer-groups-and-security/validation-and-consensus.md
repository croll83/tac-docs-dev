---
id: validation-and-consensus
title: Validation and Consensus
---

# Validation and Consensus

The sequencer network consists of groups of sequencers, each group consisting of independent sequencer nodes.

## Consensus Mechanism

- **Within Groups**:
  - Each sequencer within a group forms a transaction tree.
  - If 66% of the nodes in a group have uploaded the same tree, it is sent to the general contract for the groups.

- **Between Groups**:
  - Groups also need to reach a consensus.
  - If *X%* of the groups have uploaded the same root hash, it is accepted.

## Election Cycle

- **Duration**: Every *N* hours, where *N* is set based on a DAO vote.
- **Process**:
  - Each group sends collateral, which depends on the number of nodes.
  - A list of groups to be selected for the round is formed.
  - The number of groups depends on parameters chosen by the DAO.

## Consensus Threshold Values

Two thresholds are used in the system for transaction approval:

1. **Within Groups**: Proportion of sequencers within a group (*ps*) sufficient for consensus.
2. **Between Groups**: Proportion of groups overall (*pg*) sufficient for consensus among them.

### Reliability Considerations

- The system is considered reliable if at least 51% of the total number of validators (sequencers) must vote for each significant action.
- Threshold values should be chosen to maintain system reliability and prevent attack vectors.
