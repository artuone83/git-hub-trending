import styled from 'styled-components';
import zIndex from '../../../../styles/zIndex';

const StyledSearchBar = styled.div`
  padding: 10px 5px;
  background: ${({ theme }) => theme.colors.white};
  z-index: ${zIndex.level2};

  input {
    padding: 8px 4px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray03};
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: ${({ theme }) => theme.colors.gray03};
      font-family: 'Montserrat', sans-serif;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: ${({ theme }) => theme.colors.gray03};
      font-family: 'Montserrat', sans-serif;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: ${({ theme }) => theme.colors.gray03};
      font-family: 'Montserrat', sans-serif;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: ${({ theme }) => theme.colors.gray03};
      font-family: 'Montserrat', sans-serif;
    }
  }
`;

export { StyledSearchBar };
