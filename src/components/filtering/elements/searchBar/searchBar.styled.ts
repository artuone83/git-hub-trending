import styled from 'styled-components';

const StyledSearchBar = styled.div`
  padding: 10px 5px;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 2;

  input {
    padding: 8px 4px;
    width: 100%;
    border: 1px solid #24292e;
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #24292e;
      font-family: 'Montserrat', sans-serif;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #24292e;
      font-family: 'Montserrat', sans-serif;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #24292e;
      font-family: 'Montserrat', sans-serif;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #24292e;
      font-family: 'Montserrat', sans-serif;
    }
  }
`;

export { StyledSearchBar };
