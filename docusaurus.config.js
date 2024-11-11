/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Coding Resources',
  tagline: 'Free coding resources related to web development',
  url: 'https://github.com/hulyak/a-to-z-coding-resources',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hulyak', // Usually your GitHub org/user name.
  projectName: 'a-to-z-coding-resources', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Resources',
          position: 'left',
        },
        {
          href: 'https://github.com/hulyak/a-to-z-coding-resources',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Websites For Learning How to Code',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/hulyakarkya',
            },
            {
              label: 'Github ',
              href: 'https://github.com/hulyak/a-to-z-coding-resources',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Buy me a Coffee',
              href: 'https://www.buymeacoffee.com/hulya',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coding Resources. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/hulyak/a-to-z-coding-resources',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
