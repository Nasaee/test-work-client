import moment from 'moment';

type DateFormat = 'DD-MM-YYYY' | 'YYYY-MM-DD';

export function formatDate(
  date: Date | string,
  format: DateFormat = 'DD-MM-YYYY'
): string {
  const d = new Date(date);

  return moment(d).format(`${format}`);
}

export const calculateAge = (birthDay: Date | string): number => {
  const today = new Date();
  const birthDate = new Date(birthDay);

  return moment(today).diff(moment(birthDate), 'years');
};
