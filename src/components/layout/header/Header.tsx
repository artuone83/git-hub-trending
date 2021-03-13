import React from 'react';
import { ReactComponent as GitHubLogo } from '../../assets/github-logo.svg';
import { StyledHeader } from './header.styled';

const Header: React.FC = () => (
  <StyledHeader>
    <div>
      <GitHubLogo />
      <p>Github Unofficial Trending API</p>
    </div>
  </StyledHeader>
);

export default Header;
