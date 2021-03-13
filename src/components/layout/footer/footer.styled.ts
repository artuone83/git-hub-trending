import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
  padding: 15px 20px;
`;

export { StyledFooter };
