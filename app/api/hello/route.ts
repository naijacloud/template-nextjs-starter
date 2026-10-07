export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({
    message: `Hello from ${process.env.NEXT_PUBLIC_SITE_NAME || 'My app'}`,
    time: new Date().toISOString(),
  });
}
