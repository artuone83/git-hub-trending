import styled, { css } from 'styled-components';

const Wrapper = styled.div<{ isListVisible: boolean; isFetching: boolean }>`
  position: relative;
  border: 1px solid rgba(33, 33, 33, 0.42);
  min-width: 175px;

  svg {
    margin-left: 10px;
    transition: 0.5s;
    transform: ${({ isListVisible }) => (isListVisible ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const LanguageSelector = styled.p<{ isFetching: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 7px 10px;

  ${({ isFetching }) =>
    isFetching &&
    css`
      pointer-events: none;
    `}
`;

const LanguagesList = styled.ul<{ isListVisible: boolean }>`
  position: absolute;
  display: ${({ isListVisible }) => (isListVisible ? 'block' : 'none')};
  top: calc(100% + 10px);
  left: 0;
  max-height: 450px;
  overflow-y: scroll;
  white-space: nowrap;
  background: white;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;

  li {
    padding: 7px 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background: #f5f5f5;
    }
  }
`;

export { Wrapper, LanguagesList, LanguageSelector };
