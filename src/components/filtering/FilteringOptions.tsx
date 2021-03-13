import React from 'react';
import { LanguagesDropdown, TimeRange } from './elements';
import { StyledPanel } from './filteringOptions.styled';

const FilteringOptions: React.FC = () => (
  <StyledPanel>
    <LanguagesDropdown />
    <TimeRange />
  </StyledPanel>
);

export default FilteringOptions;
