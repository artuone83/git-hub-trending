import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  background: black;
  color: white;
  z-index: 2;
  padding: 15px 20px;
`;

export { StyledFooter };
