import styled from 'styled-components';
import zIndex from '../../../styles/zIndex';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: ${zIndex.level2};
  padding: 15px 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.dp_3};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;

const MyGitHyb = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 12px;
  }
`;

export { StyledHeader, MyGitHyb };
