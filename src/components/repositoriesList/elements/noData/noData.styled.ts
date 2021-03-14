import styled from 'styled-components';

const StyledNoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  border: 1px solid ${({ theme }) => theme.colors.gray03};
`;

export { StyledNoData };
