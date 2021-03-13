import styled, { css } from 'styled-components';
import { Direction } from './Table';

const Wrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
`;

const Th = styled.th<{ isSortable?: boolean; sortDirection?: string }>`
  font-weight: normal;
  padding: 8px 18px 18px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  user-select: none;
  position: relative;
  ${({ isSortable }) =>
    isSortable &&
    css`
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    `}
  ${({ sortDirection }) => {
    if (sortDirection === Direction.Asc) {
      return css`
        :after {
          content: '';
          position: absolute;
          border-bottom: 5px solid ${({ theme }) => theme.colors.black};
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          top: 40%;
          transform: translateX(20%);
        }
      `;
    }
    if (sortDirection === Direction.Desc) {
      return css`
        :after {
          content: '';
          position: absolute;
          border-top: 5px solid ${({ theme }) => theme.colors.black};
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          top: 40%;
          transform: translateX(20%);
        }
      `;
    }
    return undefined;
  }}
`;

const Td = styled.td`
  padding: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const TableRow = styled.tr`
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

export { Wrapper, StyledTable, TableRow, Td, Th };
