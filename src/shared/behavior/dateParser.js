import { format } from 'date-fns';

export default function parseDate (date) {
  const formatStr = 'MMMM Do YYYY, h:mm:ss a';
  return format(date, formatStr);
}
