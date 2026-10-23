// Shared links used across pages. Change a value here and every page picks it up.

// Registration form for the Nov 21, 2026 webinar. Do not publish the Zoom link on the site;
// registrants receive it after signing up.
export const WEBINAR_URL = 'https://forms.gle/Vt34XUQWqLsD26of7';

export const CALENDAR_URL = 'https://calendar.app.google/e8ErMQqHhmnHn1hk6';

// Every "Contact Me" link points here so no email address is shown on the site.
export const CONTACT_PAGE = '/contact/';

// TODO: paste a GHL "Inbound Webhook" trigger URL (or n8n webhook) here. The contact form POSTs JSON
// { name, email, organization, message, source, submitted_at, page_url } to it.
// While empty, the form tells visitors to book a discovery call instead.
export const CONTACT_WEBHOOK_URL = '';
