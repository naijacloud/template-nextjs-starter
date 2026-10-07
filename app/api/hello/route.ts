import { siteName } from '@/lib/site';

export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({
    message: `Hello from ${siteName()}`,
    time: new Date().toISOString(),
  });
}
