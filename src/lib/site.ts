/** Site-wide contact & brand constants.
 *  TODO PLACEHOLDER: replace phone with the live number before go-live.
 */

// TODO PLACEHOLDER - replace with live mobile
export const PHONE_DISPLAY = '+353 877567676';
export const PHONE_TEL = '+353877567676';

export const WHATSAPP_URL = 'https://wa.me/353877567676';
export const EMAIL = 'info@orourkeheatingplumbing.ie';

export const SITE_NAME = "O'Rourke Heating & Plumbing";
export const SITE_TAGLINE =
  "Dublin heating & plumbing. We'll travel Ireland for the bigger jobs.";

/** Base path from Astro config (`base`) — do not hardcode. */
export const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
