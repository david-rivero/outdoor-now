import moment from 'moment';

export default function parseDate (date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
