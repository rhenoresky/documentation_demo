import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Ethernal",
  tagline: "Ethernal",
  favicon: "img/insomnia.png",

  url: "https://insomnia.page",
  baseUrl: "/",

  organizationName: "laba laba",
  projectName: "docusaurus",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/insomnia.png",
    navbar: {
      title: "Ethernal",
      logo: {
        alt: "Ethernal logo",
        src: "img/insomnia.png",
      },
      items: [
        {
          type: "search",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [require.resolve("docusaurus-lunr-search")],
};

export default config;
