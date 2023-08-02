export function formatDate(language, date) {
  return (date ? new Date(date) : new Date()).toLocaleDateString(`${language}-US`, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
