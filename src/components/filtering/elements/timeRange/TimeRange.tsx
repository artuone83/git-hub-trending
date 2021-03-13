import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LocalStorageKeys } from '../../../../models/localStorageKeys';
import { getFromLocalStorage } from '../../../../utils/getFromLocalStorage';
import { setToLocalStorage } from '../../../../utils/setToLocalStorage';
import { getRepositoriesAsync } from '../../../repositoriesList/repositoriesSlice';
import { selectLanguageChoice } from '../languagesDropdown/languagesSlice';
import { Tabs, TimeRangeTab } from './timeRange.styled';

enum Name {
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
}

const since = [
  {
    id: 0,
    name: Name.DAILY,
    value: Name.DAILY.toLowerCase(),
  },
  {
    id: 1,
    name: Name.WEEKLY,
    value: Name.WEEKLY.toLowerCase(),
  },
  {
    id: 2,
    name: Name.MONTHLY,
    value: Name.MONTHLY.toLowerCase(),
  },
];

const TimeRange = (): JSX.Element => {
  const [activeTimeRange, setActiveTimeRange] = useState('');
  const languageChoice = useSelector(selectLanguageChoice);
  const dispatch = useDispatch();

  useEffect(() => {
    const sinceRange = getFromLocalStorage(LocalStorageKeys.SINCE);

    if (sinceRange) {
      setActiveTimeRange(sinceRange);
    }
  }, []);

  const handleTimeRangeClick = (range: string): void => {
    setActiveTimeRange(range);

    let timeRange = activeTimeRange;
    timeRange = range;
    setToLocalStorage(LocalStorageKeys.SINCE, `${range}`);
    dispatch(getRepositoriesAsync(languageChoice, timeRange));
  };

  return (
    <Tabs>
      {since.map(({ name, value, id }) => (
        <TimeRangeTab key={id} isActive={activeTimeRange === value} onClick={() => handleTimeRangeClick(value)}>
          {name}
        </TimeRangeTab>
      ))}
    </Tabs>
  );
};

export default TimeRange;
