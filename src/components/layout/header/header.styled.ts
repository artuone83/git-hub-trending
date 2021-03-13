import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 2;
  padding: 15px 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);

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

export { StyledHeader };
