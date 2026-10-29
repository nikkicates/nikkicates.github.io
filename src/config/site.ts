// Shared links used across pages. Change a value here and every page picks it up.

// Registration form for the Nov 21, 2026 webinar. Do not publish the Zoom link on the site;
// registrants receive it after signing up.
export const WEBINAR_URL = 'https://forms.gle/Vt34XUQWqLsD26of7';

// Microsoft Bookings page (discovery calls, speaking inquiries, and other appointments).
export const CALENDAR_URL ='https://bookings.cloud.microsoft/book/STReadinessGroup@strategictransformations.net/';

// Every "Contact Me" link points here.
export const CONTACT_PAGE = '/contact/';

// Shown on the contact page as a direct alternative to the form.
export const CONTACT_EMAIL = 'hello@strategictransformations.net';

// TODO: paste a GHL "Inbound Webhook" trigger URL (or n8n webhook) here. The contact form POSTs JSON
// { name, email, organization, message, source, submitted_at, page_url } to it.
// While empty, submitting opens a prefilled email to CONTACT_EMAIL in the visitor's email app.
export const CONTACT_WEBHOOK_URL = '';

// Shown in small text under "Book a Call" buttons.
export const BOOKING_NOTE = 'Choose a discovery call, pilot interest call, speaking inquiry, or general conversation.';
