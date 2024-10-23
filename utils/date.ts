import moment from 'moment';

export function formatDate(date: Date | string): string {
  const d = new Date(date);

  return moment(d).format('YYYY-MM-DD');
}

export const calculateAge = (birthDay: Date | string): number => {
  const today = new Date();
  const birthDate = new Date(birthDay);

  return moment(today).diff(moment(birthDate), 'years');
};
