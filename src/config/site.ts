// Shared links used across pages. Change a value here and every page picks it up.

// Registration form for the Nov 21, 2026 webinar. Do not publish the Zoom link on the site;
// registrants receive it after signing up.
export const WEBINAR_URL = 'https://forms.gle/Vt34XUQWqLsD26of7';

// Microsoft Bookings page (discovery calls, speaking inquiries, and other appointments).
export const CALENDAR_URL = 'https://bookings.cloud.microsoft/book/STReadinessGroup@strategictransformations.net/';

// Direct links to each Bookings service, so visitors skip the "select a service" step.
// Copy a new link from Bookings > Services > (service) > Copy link if a service is recreated.
export const BOOKING_SERVICES = [
  {
    name: 'Discovery Call',
    desc: 'For organizations exploring readiness training, AI governance, or fractional support.',
    href: `${CALENDAR_URL}s/LBqZask5FE-Bm1Z03hX-4A2`,
  },
  {
    name: 'Pilot Interest Call',
    desc: 'For organizations interested in joining a pilot.',
    href: `${CALENDAR_URL}s/JXrdfopLsEufWQj-sZYIBA2`,
  },
  {
    name: 'Speaking Inquiry',
    desc: 'For keynotes, team trainings, and board briefings.',
    href: `${CALENDAR_URL}s/mr01R_P7qUeZ3bXdIISexQ2`,
  },
  {
    name: 'General Conversation',
    desc: 'For anything else, including partnerships and media.',
    href: `${CALENDAR_URL}s/Qp36CvsTHU6jjLzR_V32LA2`,
  },
];

// Every "Contact Me" link points here.
export const CONTACT_PAGE = '/contact/';

// Public contact email, shown on the contact page, footer, and Nexus page.
export const CONTACT_EMAIL = 'hello@strategictransformations.net';

// Shown in small text under "Book a Call" buttons.
export const BOOKING_NOTE = 'Choose a discovery call, pilot interest call, speaking inquiry, or general conversation.';
