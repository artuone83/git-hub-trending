import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LocalStorageKeys } from '../../../../models/localStorageKeys';
import { getFromLocalStorage } from '../../../../utils/getFromLocalStorage';
import { setToLocalStorage } from '../../../../utils/setToLocalStorage';
import { getRepositoriesAsync } from '../../../repositoriesList/repositoriesSlice';
import { selectLanguageChoice } from '../languagesDropdown/languagesSlice';
import { Tabs, TimeRangeTab } from './timeRange.styled';
import { selectActiveTimeRange, setActiveTimeRange } from './timeRangeSlice';

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
  const activeTimeRange = useSelector(selectActiveTimeRange);
  const languageChoice = useSelector(selectLanguageChoice);
  const dispatch = useDispatch();

  useEffect(() => {
    const sinceRange = getFromLocalStorage(LocalStorageKeys.SINCE);

    if (sinceRange) {
      dispatch(setActiveTimeRange(sinceRange));
    }
  }, []);

  const handleTimeRangeClick = (range: string): void => {
    dispatch(setActiveTimeRange(range));
    setToLocalStorage(LocalStorageKeys.SINCE, `${range}`);
    dispatch(getRepositoriesAsync(languageChoice, activeTimeRange));
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
