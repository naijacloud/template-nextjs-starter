import { NC } from '@/lib/naijacloud';
import { siteName } from '@/lib/site';

const happened = [
  ['01', 'Built', 'Naijacloud found Next.js in package.json and ran next build. No Dockerfile needed.'],
  ['02', 'Running', 'next start serves the app on the port Naijacloud gives it, and restarts it if it stops.'],
  ['03', 'Secured', 'Your naijacloud.app address has HTTPS, issued and renewed for you.'],
];

const next = [
  {
    k: 'git push',
    title: 'Connect your own repo',
    body: 'Point this service at your GitHub repository and every push builds and deploys.',
    href: NC.connectRepo,
  },
  {
    k: 'yourname.com',
    title: 'Use your own domain',
    body: 'Add a domain you own. Naijacloud issues its certificate and keeps it renewed.',
    href: NC.domains,
  },
  {
    k: 'DATABASE_URL',
    title: 'Add a database',
    body: 'Managed Postgres, MySQL, MongoDB or Redis, joined to your app on a private network.',
    href: NC.databases,
  },
  {
    k: 's3://',
    title: 'Store files',
    body: 'S3-compatible object storage for uploads, images and backups.',
    href: NC.storage,
  },
];

export default function Home() {
  const name = siteName();
  const endpoints = [
    { href: '/api/hello', label: 'GET /api/hello', note: 'A JSON API route' },
    { href: '/healthz', label: 'GET /healthz', note: 'The health check' },
  ];
  return (
    <div className="wrap">
      <header className="bar">
        <span className="brand">
          <span className="mark" aria-hidden="true">
            NC
          </span>
          {name}
        </span>
        <span className="live">
          <span className="dot" aria-hidden="true" />
          <span className="label">Live</span>
        </span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            <span className="live">
              <span className="dot" aria-hidden="true" />
              Deployed on Naijacloud
            </span>
          </p>
          <h1>
            Your app is live. <em>Now make it yours.</em>
          </h1>
          <p className="lead">
            This is the Next.js starter, built from its repo and running over
            HTTPS. Open <code>app/page.tsx</code>, change anything, and deploy
            again.
          </p>
          <div className="actions">
            <a className="btn primary" href={NC.dashboard}>
              Open your dashboard →
            </a>
            <a className="btn quiet" href={NC.webServices}>
              How web services work
            </a>
          </div>
        </section>

        <section className="steps" aria-label="What just happened">
          {happened.map(([n, title, body]) => (
            <div className="step" key={n}>
              <span className="n">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>Already in the box</h2>
          <p className="sub">Two routes to build on, and one variable to try.</p>
          <div className="endpoints">
            {endpoints.map((e) => (
              <a key={e.href} href={e.href}>
                <code>{e.label}</code>
                <span>{e.note}</span>
              </a>
            ))}
            <a href={NC.envVars}>
              <code>SITE_NAME</code>
              <span>Set it on the service to rename this page, now &ldquo;{name}&rdquo;. No rebuild needed.</span>
            </a>
          </div>
        </section>

        <section className="section">
          <h2>What to do next</h2>
          <p className="sub">Everything your app grows into, in the same place.</p>
          <div className="cards">
            {next.map((c) => (
              <a className="card" href={c.href} key={c.title}>
                <span className="k">{c.k}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="go">Read how →</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="foot">
        <a className="by" href={NC.home}>
          <span className="mark small" aria-hidden="true">
            NC
          </span>
          <span>
            Deployed on <strong>Naijacloud</strong>
          </span>
        </a>
        <nav aria-label="Naijacloud">
          <a href={NC.dashboard}>Dashboard</a>
          <a href={NC.docs}>Docs</a>
          <a href={NC.templates}>Templates</a>
          <a href={NC.guides}>Guides</a>
        </nav>
      </footer>
    </div>
  );
}
