import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Container: React.FC = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
