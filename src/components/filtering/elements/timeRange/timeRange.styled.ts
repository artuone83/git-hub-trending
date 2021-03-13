import styled, { css } from 'styled-components';

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeRangeTab = styled.div<{ isActive: boolean }>`
  background: ${({ theme }) => theme.colors.gray};
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
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.blue01};
    `}
`;

export { Tabs, TimeRangeTab };
