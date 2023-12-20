// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI Jeannie",
  tagline: "Atlassian JIRA Assistant for Agile Teams",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://aijeannie.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "aijeannie", // Usually your GitHub org/user name.
  projectName: "aijeannie.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/aijeannie-social-card.jpg",
      navbar: {
        title: "AI Jeannie",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "guideSidebar",
            position: "left",
            label: "Guides",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/aijeannie/aijeannie.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guides",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Privacy Policy",
                href: "https://aijeannie.github.io/docs/legal/privacy-policy",
              },
              {
                label: "EULA",
                href: "https://aijeannie.github.io/docs/legal/eula",
              },
              {
                label: "Atlassian Trademark Guidelines",
                href: "https://www.atlassian.com/legal/trademark",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/ai-jeannie",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/ai-jeannie",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/ai-jeannie",
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/aijeannie/aijeannie.github.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Jeannie, EPAM Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
