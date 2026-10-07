/**
 * Read at request time, not build time, so changing SITE_NAME on the service and
 * restarting is enough: no rebuild needed. (A NEXT_PUBLIC_ variable would be
 * frozen into the build.)
 */
export const siteName = () => process.env.SITE_NAME || 'My app';
