# Next.js starter

A minimal Next.js 15 App Router app with one page, an API route and a health check.

[![Deploy on Naijacloud](https://img.shields.io/badge/Deploy%20on-Naijacloud-008751)](https://naijacloud.com/new?template=nextjs-starter&ref=template-nextjs-starter)

## Deploy

Click **Deploy** above, or open <https://naijacloud.com/new?template=nextjs-starter&ref=template-nextjs-starter>. Naijacloud builds it from this public repo and gives you a live HTTPS address. No GitHub connection needed; you can switch the service to your own fork later.

## What's inside

- Next.js 15 with the App Router and TypeScript
- A JSON route at `/api/hello` and a health check at `/healthz`
- No Dockerfile: Naijacloud detects Next.js, runs `npm ci && npm run build`, then `npm run start` on `$PORT`

## Environment variables

| Name | What it's for | Default |
| --- | --- | --- |
| `SITE_NAME` | Shown in the page title and header (read at request time) | `My app` |

## Run it locally

```sh
git clone https://github.com/naijacloud/template-nextjs-starter
cd template-nextjs-starter
cp .env.example .env
npm install
npm run dev
```

## License

MIT
