import styled, { css } from 'styled-components';
import zIndex from '../../../../styles/zIndex';

const Wrapper = styled.div<{ isListVisible: boolean; isFetching: boolean }>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray03};
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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.dp_9};
  z-index: ${zIndex.level1};

  li {
    padding: 7px 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors.grayTable};
    }
  }
`;

export { Wrapper, LanguagesList, LanguageSelector };
