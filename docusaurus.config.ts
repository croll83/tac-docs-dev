import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TAC Docs',
  tagline: 'TAC is the acronym of TON App Chain. It\'s an EVM execution environment that is natively plugged into TON Blockchain. TAC is the best way for Solidity developers to distribute their dApps to the TON and the official Telegram @wallet userbase. TON users will be able to access their favourite Solidity dApps directly from TON with the best UX possible',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TAC', // Usually your GitHub org/user name.
  projectName: 'tac-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-mathjax')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'TAC Docs',
      logo: {
        alt: 'Ton App Chain Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developers',
          position: 'left',
          label: 'Developers',
        },
        {
          type: 'docSidebar',
          sidebarId: 'users',
          position: 'left',
          label: 'Use TAC',
        },
        {
          type: 'docSidebar',
          sidebarId: 'architecture',
          position: 'left',
          label: 'Architecture',
        },
        {
          type: 'doc',
          docId: 'run-node',
          position: 'left',
          label: 'Run a node',
        },
        {
          type: 'doc',
          docId: 'release-note',
          position: 'right',
          label: 'Release Note',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'TAC Website [soon]',
              to: '#',
            },
            {
              label: 'TON Website',
              to: 'https://ton.org/',
            },
            {
              label: 'TAC Network Status [soon]',
              to: '#',
            },
            {
              label: 'TAC Blockexplorer',
              to: 'https://tac-dev-blockscout.eu-north-2.gateway.fm/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X [soon]',
              href: '#',
            },
            {
              label: 'Telegram [soon]',
              href: '#',
            },
            {
              label: 'Discord [soon]',
              href: '#',
            },
            {
              label: 'Youtube [soon]',
              href: '#',
            },
            {
              label: 'Give Feedback [soon]',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Mirror [soon]',
              to: '#',
            },
            {
              label: 'GitHub [soon]',
              href: '#',
            },
            {
              label: 'Contribute to Documentation [soon]',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enabler Development Ltd.. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
