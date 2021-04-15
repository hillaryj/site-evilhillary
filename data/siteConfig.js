module.exports = {
  siteTitle: 'Home of Evil Hillary',
  siteDescription: 'Possibly evil. Definitely a Hillary.',
  authorName: 'Hillary Jeffrey',
  twitterUsername: 'DeputyHuman',
  authorAvatar: 'evil-hillary-pitchfork.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `Possibly evil. Definitely a Hillary.`,
  siteUrl: 'https://www.evilhillary.com/',
  // Prefixes all links. For cases when deployed to domain/site-parts/
  // pathPrefix: '/evil-hillary', // Note: it must *not* have a trailing slash.
  siteCover: 'concert-lighting.png', // file in content/images
  googleAnalyticsId: null,
  background_color: '#ffffff',
  theme_color: '#463591',
  display: 'standalone',
  icon: 'content/images/evil-hillary.png',
  postsPerPage: 6,
  headerTitle: 'EvilHillary.com',
  headerLinksIcon: 'evil-hillary.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Why evil?',
      url: '/why-evil',
    },
    {
      label: 'Github',
      url: 'https://github.com/hillaryj',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Home',
          url: '/',
        },
        {
          label: 'About',
          url: '/about',
        },
        {
          label: 'Why evil?',
          url: '/why-evil',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Non-Evil Hillary',
          url: 'https://www.hillaryjeffrey.com',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/hillaryj',
        },
      ],
    },
  ],
}
