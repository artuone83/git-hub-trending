import React from 'react';
import { StyledNoData } from './noData.styled';

type Props = {
  message: string;
};

const NoData: React.FC<Props> = ({ message }) => <StyledNoData>{message}</StyledNoData>;

export default NoData;
