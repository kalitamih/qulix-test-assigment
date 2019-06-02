export const GMAILADDR = 'https://www.googleapis.com/gmail/v1/users/';

export const CHUNK = 4;

export const MAXRES = `maxResults=${CHUNK * 2}`;

export const CATEGORY = [
  'UNREAD', 'CATEGORY_SOCIAL', 'INBOX',
  'CATEGORY_UPDATES', 'CATEGORY_PERSONAL',
  'CATEGORY_PROMOTIONS', 'IMPORTANT',
  'TRASH', 'SPAM', 'STARRED',
  'SENT', 'DRAFT', 'CATEGORY_PROMOTIONS',
  'CATEGORY_UPDATES', 'CATEGORY_FORUMS',
];
