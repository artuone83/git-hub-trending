import React, { useState, useEffect } from 'react';
import { sortBy } from 'lodash';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
import { Panel } from '../layout';
import Table, { Direction, TableDataType } from './elements/Table';
import { data } from './data';

const StyledPanel = styled(Panel)`
  grid-area: repositories;
  position: relative;
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  margin-bottom: 60px;
  font-weight: bold;
`;

const viewModel = {
  fields: [
    {
      header: 'Author',
      field: 'author',
    },
    {
      header: 'Name',
      field: 'name',
    },
    {
      header: 'Description',
      field: 'description',
    },
    {
      header: 'Language',
      field: 'language',
    },
    {
      header: 'Stars',
      field: 'stars',
      isSortable: true,
    },
  ],
};

const RepositoriesList: React.FC = () => {
  const [tableData, setTableData] = useState<TableDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTableData(data);
      setIsLoading(false);
    }, 5000);
  });

  const handleFilterChange = (sortField: string, direction: Direction): void => {
    const sortedData = sortBy(tableData, [sortField]);
    if (direction === Direction.Desc) {
      sortedData.reverse();
    }
    setTableData(sortedData);
  };

  return (
    <StyledPanel>
      <Title>Repositories</Title>
      {isLoading ? (
        <Loader>
          <PuffLoader size={30} />
        </Loader>
      ) : (
        <Table viewModel={viewModel} data={tableData} onFilterChange={handleFilterChange} />
      )}
    </StyledPanel>
  );
};

export default RepositoriesList;
