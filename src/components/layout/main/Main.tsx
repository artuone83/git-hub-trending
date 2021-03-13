import React from 'react';
import { FilteringOptions, RepositoriesList } from '../../../components';
import { StyledMain } from './main.styled';

type Props = {
  headerHeight: number;
};

const Main: React.FC<Props> = ({ headerHeight }) => (
  <StyledMain headerHeight={headerHeight}>
    <FilteringOptions />
    <RepositoriesList />
  </StyledMain>
);

export default Main;
