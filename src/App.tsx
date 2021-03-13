import React, { useEffect, useState, createRef } from 'react';
import { Container, Header, Main, Footer } from './components';

const App = (): JSX.Element => {
  const headerRef = createRef<HTMLElement>();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
  }, []);

  return (
    <Container>
      <Header ref={headerRef} />
      <Main headerHeight={headerHeight} />
      <Footer />
    </Container>
  );
};

export default App;
