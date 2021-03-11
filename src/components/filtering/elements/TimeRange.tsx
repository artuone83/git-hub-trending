import React, { useState } from 'react';
import styled from 'styled-components';

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeRangeTab = styled.div<{ isActive: boolean }>`
  background: #f2f2f2;
  padding: 10px 5px;
  color: rgba(33, 33, 33, 0.42);
  border-radius: 4px;
  min-width: 95px;
  text-align: center;
  margin-right: 10px;
  transition: 0.5s;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
    color: #ffffff;
    background: #2D8EFF;
  `}
`;

const since = [
  {
    id: 0,
    name: 'Daily',
    value: 'daily',
  },
  {
    id: 1,
    name: 'Weekly',
    value: 'weekly',
  },
  {
    id: 2,
    name: 'Monthly',
    value: 'monthly',
  },
];

const TimeRange = (): JSX.Element => {
  const [activeTimeRange, setActiveTimeRange] = useState('');
  const handleTimeRangeClick = (range: string): void => {
    setActiveTimeRange(range);
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
