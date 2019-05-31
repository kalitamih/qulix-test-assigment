const convert = str => (
  str
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '>')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
);

export default convert;
