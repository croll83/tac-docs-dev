import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';


const sidebars: SidebarsConfig = {
  developers: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['developers/introduction','developers/sample-tac-scenario','developers/transaction-lifecycle']
    },
    {
      type: 'category',
      label: 'Chain Specs',
      items: ['developers/todo'],
    },
    {
      type: 'category',
      label: 'Deploy Solidity dApps',
      items: ['developers/todo'],
    },
    {
      type: 'category',
      label: 'TON Link',
      items: ['developers/todo'],
    },
    {
      type: 'category',
      label: 'Developer Tools',
      items: ['developers/todo'],
    },
    {
      type: 'category',
      label: 'Community Guides',
      items: ['developers/todo'],
    },
    {
      type: 'category',
      label: 'TAC Builders Community',
      items: ['developers/todo'],
    }
  ],
  architecture: [
    'architecture/introduction',
    {
      type: 'category',
      label: 'High-Level Architecture',
      items: [
        'architecture/high-level-architecture/core-components',
        'architecture/high-level-architecture/cross-chain-layers',
        'architecture/high-level-architecture/sequencers-cm-layer',
        'architecture/high-level-architecture/dapp-proxies',
        'architecture/high-level-architecture/dapp-layer',
      ],
    },
    {
      type: 'category',
      label: 'Sequencer Groups and Security',
      items: [
        'architecture/sequencer-groups-and-security/validation-and-consensus',
        'architecture/sequencer-groups-and-security/collateral-and-restaking',
      ],
    },
    'architecture/sequencers-synchronization-and-epochs',
    'architecture/cross-chain-messages-validation-and-security',
    {
      type: 'category',
      label: 'Execution Layer',
      items: [
        'architecture/execution-layer/executor-selection',
        'architecture/execution-layer/transaction-execution',
        'architecture/execution-layer/transaction-rollback',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: ['architecture/appendix/reliability-analysis'],
    },
  ],
  users: [
    {
      type: 'category',
      label: 'Wallets',
      items: ['users/todo'],
    },
    {
      type: 'category',
      label: 'FIAT onramps',
      items: ['users/todo'],
    },
    {
      type: 'category',
      label: 'Bridge on TAC',
      items: ['users/todo'],
    },
    {
      type: 'category',
      label: 'Community Compass',
      items: ['users/todo'],
    },
    {
      type: 'category',
      label: 'Risk Disclosures',
      items: ['users/todo'],
    },
    {
      type: 'category',
      label: 'Contact us',
      items: ['users/todo'],
    },
  ]

};

export default sidebars;
