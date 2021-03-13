import React from 'react';
import { FilteringOptions, RepositoriesList } from '../../../components';
import { StyledMain } from './main.styled';

const Main: React.FC = () => (
  <StyledMain>
    <FilteringOptions />
    <RepositoriesList />
  </StyledMain>
);

export default Main;
