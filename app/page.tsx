const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'My app';

const links = [
  { href: '/api/hello', label: 'GET /api/hello', note: 'A JSON API route' },
  { href: '/healthz', label: 'GET /healthz', note: 'The health check' },
];

export default function Home() {
  return (
    <main className="wrap">
      <header className="bar">
        <span className="logo" aria-hidden="true" />
        <span className="name">{siteName}</span>
      </header>
      <section className="hero">
        <p className="eyebrow">Next.js 15 · App Router</p>
        <h1>It works. Now make it yours.</h1>
        <p className="lead">
          Edit <code>app/page.tsx</code> and push. Every commit builds and
          deploys on its own.
        </p>
      </section>
      <section className="grid">
        {links.map((l) => (
          <a key={l.href} className="card" href={l.href}>
            <code>{l.label}</code>
            <span>{l.note}</span>
          </a>
        ))}
        <div className="card muted">
          <code>NEXT_PUBLIC_SITE_NAME</code>
          <span>Set it to rename this page: now &ldquo;{siteName}&rdquo;</span>
        </div>
      </section>
    </main>
  );
}
