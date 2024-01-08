import generatePicker from 'antd/es/date-picker/generatePicker';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import updateLocale from 'dayjs/plugin/updateLocale';
import moment from 'moment';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';

moment.updateLocale('en', { week: { dow: 1 } });
dayjs.extend(isoWeek);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
  weekdaysMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
});

const datePickerConfig = dayjsGenerateConfig;
datePickerConfig.locale.getWeek = (locale, value) => {
  const clone = value.clone();
  const result = clone.locale(locale);
  return result.isoWeek();
};
export const DatePicker = generatePicker<Dayjs>(datePickerConfig);
