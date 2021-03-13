import React from 'react';
import { ReactComponent as GitHubLogo } from '../../assets/github-logo.svg';
import { StyledHeader } from './header.styled';

const Header = React.forwardRef<HTMLElement>((_, ref) => (
  <StyledHeader ref={ref}>
    <div>
      <GitHubLogo />
      <p>Github Unofficial Trending API</p>
    </div>
  </StyledHeader>
));

Header.displayName = 'Header';

export default Header;
