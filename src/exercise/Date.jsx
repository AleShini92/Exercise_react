const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function ToDate() {
  return (
    <h1>Today is {formatDate(today)}</h1>
  );
}