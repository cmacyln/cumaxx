/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cumaxx.de',
  generateRobotsTxt: true,
  alternateRefs: [
    { href: 'https://cumaxx.de/de', hreflang: 'de' },
    { href: 'https://cumaxx.de/en', hreflang: 'en' },
    { href: 'https://cumaxx.de/tr', hreflang: 'tr' },
  ],
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 0.9 : 0.7,
    lastmod: new Date().toISOString(),
  }),
}
