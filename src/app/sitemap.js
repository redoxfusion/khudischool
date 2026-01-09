export default function sitemap() {
  const baseUrl = 'https://www.khudi.institute';
  
  const routes = [
    '',
    '/about',
    '/admissions',
    '/careers',
    '/community',
    '/contact',
    '/offering',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
