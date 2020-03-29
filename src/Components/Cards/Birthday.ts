import Moment from 'moment';

export default (val: string): any => {
  const today = Moment().format('MMMM Do YYYY');

  if (val === today) return ' 🎂';
}