/**
 * Links back to Naijacloud. The ref tells Naijacloud which template a visit
 * came from; delete this file (and the footer) whenever you like.
 */
const ref = 'template-nextjs-starter';
const nc = (path: string) => `https://naijacloud.com${path}?ref=${ref}`;

export const NC = {
  home: nc('/'),
  dashboard: nc('/projects'),
  docs: nc('/docs'),
  templates: nc('/templates'),
  guides: nc('/guides'),
  connectRepo: nc('/docs/deploy/sources'),
  domains: nc('/docs/domains/custom-domains'),
  databases: nc('/docs/databases/overview'),
  storage: nc('/docs/storage/overview'),
  envVars: nc('/docs/deploy/environment-variables'),
  webServices: nc('/docs/deploy/web-services'),
};
