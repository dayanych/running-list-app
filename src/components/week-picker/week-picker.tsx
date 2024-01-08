import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from 'src/common/helpers/date-picker';
import { getDatesOfWeek } from 'src/common/helpers/get-dates-of-week';
import { getMaxWeek } from 'src/common/helpers/get-max-week';
import { getWeekNumber } from 'src/common/helpers/get-week-number';
import { useWeekParam } from 'src/common/hooks/use-week-and-year';
import styles from 'src/components/week-picker/week-picker.module.scss';

const customWeekStartEndFormat: DatePickerProps['format'] = (value) => {
  const weekFormat = 'DD.MM.YY';
  const date = dayjs(value).toDate();
  const firstDate = moment(date).startOf('week').format(weekFormat);
  const lastDate = moment(date).endOf('week').format(weekFormat);

  return `${firstDate} - ${lastDate}`;
};

const WeekPicker = () => {
  const navigate = useNavigate();
  const { year, weekNumber } = useWeekParam();
  const { firstDate: firstDateOfWeek } = getDatesOfWeek(year, weekNumber);

  const onChangeWeek: DatePickerProps['onChange'] = (date) => {
    if (date) {
      const weekOfDatePicker = getWeekNumber(date.toDate());
      const yearOfDatePicker = date.get('year');
      navigate(`/${yearOfDatePicker}/${weekOfDatePicker}`);
    }
  };

  const nextWeek = () => {
    const lastWeek = getMaxWeek(year);
    weekNumber < lastWeek
      ? navigate(`/${year}/${weekNumber + 1}`)
      : navigate(`/${year + 1}/1`);
  };

  const previousWeek = () => {
    weekNumber > 1
      ? navigate(`/${year}/${weekNumber - 1}`)
      : navigate(`/${year - 1}/${getMaxWeek(year - 1)}`);
  };

  return (
    <div className={styles.wrapper}>
      <LeftOutlined className={styles.arrowButton} onClick={previousWeek} />

      <DatePicker
        onChange={onChangeWeek}
        picker="week"
        value={dayjs(firstDateOfWeek)}
        format={customWeekStartEndFormat}
        bordered={false}
        suffixIcon={null}
        allowClear={false}
        className={styles.weekTitle}
      />

      <RightOutlined className={styles.arrowButton} onClick={nextWeek} />
    </div>
  );
};

export default WeekPicker;
