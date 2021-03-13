import React from 'react';
import { StyledSearchBar } from './searchBar.styled';

type Props = {
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
};

const SearchBar: React.FC<Props> = ({ handleSearchChange, searchValue }) => (
  <StyledSearchBar>
    <input
      type='text'
      name='search'
      id='search'
      onChange={handleSearchChange}
      value={searchValue}
      placeholder='Find language...'
    />
  </StyledSearchBar>
);

export default SearchBar;
