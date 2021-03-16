import styled from 'styled-components';
import zIndex from '../../../styles/zIndex';

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
  z-index: ${zIndex.level2};
  padding: 15px 20px;

  h1 {
    font-size: 16px;
  }
`;

export { StyledFooter };
