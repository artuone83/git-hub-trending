import React from 'react';
import styled from 'styled-components';
import { Panel } from '../layout';

const StyledPanel = styled(Panel)`
  grid-area: repositories;
`;

const RepositoriesList: React.FC = () => <StyledPanel>RepositoriesList</StyledPanel>;

export default RepositoriesList;
