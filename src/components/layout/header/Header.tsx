import React from 'react';
import { ReactComponent as GitHubLogo } from '../../assets/github-logo.svg';
import { StyledHeader, MyGitHyb } from './header.styled';

const href = {
  myGithub: 'https://github.com/artuone83',
  trendingApi: 'https://github.com/huchenme/github-trending-api',
};

const Header = React.forwardRef<HTMLElement>((_, ref) => (
  <StyledHeader ref={ref}>
    <div>
      <a href={href.myGithub} target='_blank' rel='noreferrer'>
        <MyGitHyb title='Check my GitHub 😎'>
          <GitHubLogo />
          <span>artuOne83</span>
        </MyGitHyb>
      </a>
      <a href={href.trendingApi} target='_blank' rel='noreferrer'>
        <p>Github Unofficial Trending API</p>
      </a>
    </div>
  </StyledHeader>
));

Header.displayName = 'Header';

export default Header;
