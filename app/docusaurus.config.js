// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { StrictMode } = require('react');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SETU',
  tagline: '',
  url: 'https://standard.setu.nl',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn', // TODO: set to throw
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
        en:{
            label: 'EN'
        },
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      // https://github.com/rohit-gohri/redocusaurus/
      // https://redocusaurus.vercel.app/docs
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'planning-api',
            spec: 'api/planning.yml',
            route: '/api/planning',
            layout: {
              title: 'API for Planning and Scheduling'
            }
          },
          {
            id: 'purchase-to-pay-api',
            spec: 'api/purchase-to-pay.yml',
            route: '/api/p2p',
            layout: {
              title: 'API for Purchase to Pay'
            },
            
          },
          {
            id: 'gelijkwaardige-beloning-api',
            spec: 'api/gelijkwaardige-beloning.yml',
            route: '/api/gelijkwaardige-beloning',
            layout: {
              title: 'API for Gelijkwaardige Beloning'
            },
            
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#0060AA',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          href: 'https://www.setu.nl/',
          src: 'img/logo-setu.png',
        },
        items: [
          {
            to: '/',
            label: 'Documentation',
            position: "left",
            className: "header-text",
          },
          {
            to: 'https://setu.nl',
            label: 'SETU website',
            position: "right",
            className: "header-text",
          },
          {
            to: 'https://setu.semantic-treehouse.nl',
            label: 'SETU standards portal',
            position: "right",
            className: "header-text",
          },
          {
            to: 'https://github.com/setu-standards',
            label: 'SETU github',
            position: "right",
            className: "header-text",
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} SETU`, 
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
