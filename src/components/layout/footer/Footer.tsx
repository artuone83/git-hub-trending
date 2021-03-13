import React from 'react';
import { StyledFooter } from './footer.styled';

const Footer = React.forwardRef<HTMLElement>((_, ref) => (
  <StyledFooter ref={ref}>
    <h1>Github Unofficial Trending API</h1>
    <p>Artur Woźniak &#169; {new Date().getFullYear()}</p>
  </StyledFooter>
));

Footer.displayName = 'Footer';

export default Footer;
