---
id: reliability-analysis
title: Appendix 1. Reliability Analysis of the System of Sequencer Groups
---

# Appendix 1: Reliability Analysis of the System of Sequencer Groups

## Overview

We aim to find an expression for the system reliability $ R $, which is the minimum share of sequencers sufficient for consensus.

Let’s denote by $ n_i $ the number of sequencers in group $ i $.

- **Group Consensus**: For consensus in the $ i $-th group, $ \\left\\lceil p_s n_i \\right\\rceil $ votes of sequencers are sufficient.
- **System Consensus**: To achieve system consensus at the group level, consensus is required in the first $ \\left\\lceil p_g K \\right\\rceil $ groups, sorted in ascending order by the number of sequencers in them.

## Reliability Expression

The reliability $ R $ is calculated as:

$$
R = \\frac{ \\sum\\limits_{i=1}^{ \\left\\lceil p_g K \\right\\rceil } \\left\\lceil p_s n_i \\right\\rceil }{ \\sum\\limits_{i=1}^{K} n_i }
$$

- **Parameters**:
  - $ K $: Total number of groups.
  - $ n_i $: Number of sequencers in group $ i $.
  - $ p_s $: Threshold proportion of sequencers within a group.
  - $ p_g $: Threshold proportion of groups overall.

## Worst-Case Scenario Estimate

In the worst case, when the system has exactly $ \\left\\lceil p_g K \\right\\rceil $ groups with the minimum number of sequencers $ N_{\\mathrm{min}} $ and $ K - \\left\\lceil p_g K \\right\\rceil $ groups with the maximum number $ N_{\\mathrm{max}} $, we get:

$$
R = \\frac{ \\left\\lceil p_g K \\right\\rceil \\left\\lceil p_s N_{\\mathrm{min}} \\right\\rceil }{ K N_{\\mathrm{avg}} }
$$

- **Where**:
  - $ N_{\\mathrm{avg}} = \\frac{ N_{\\mathrm{max}} + N_{\\mathrm{min}} }{2} $: Average number of sequencers per group.
  - $ c = \\frac{ N_{\\mathrm{max}} }{ N_{\\mathrm{min}} } $

## Threshold Selection

- **Objective**: Choose $ p_s $ and $ p_g $ so that $ R \\geq 0.5 $ (system reliability of at least 51%).
- **Considerations**:
  - For balanced groups, thresholds can be chosen around $ 0.71 $ to $ 0.8 $.
  - The thresholds should be selected based on the ratio of $ N_{\\mathrm{max}} $ to $ N_{\\mathrm{min}} $.

## Average Case Analysis

Assuming the number of sequencers in each group $ n_i $ is taken from a uniform distribution:

$$
n_i \\sim \\text{Uniform}( N_{\\mathrm{min}}, N_{\\mathrm{max}} )
$$

The expected value of $ R $ is then:

$$
E[R] = \\frac{ \\left\\lceil p_g K \\right\\rceil \\left\\lceil p_s N_{\\mathrm{min}} \\right\\rceil }{ K \\cdot E[n_i] }
$$

## Numerical Analysis

- **Monte Carlo Simulations**: Used to sample from distributions and average the obtained values.
- **Findings**:
  - As the number of groups increases, the reliability decreases.
  - By selecting appropriate parameters, reliability of more than 50% can be achieved for all reasonable values.

## Figure 1

*Note: Include a graph illustrating the dependence of system reliability on the number of groups with the number of sequencers ranging from 1 to 20 in each group.*
