import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export default dateField =>
    dateField ? format(parseISO(dateField), 'dd.MM.yyyy') : undefined;
