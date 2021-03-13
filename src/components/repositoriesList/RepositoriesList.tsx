import React, { useEffect, useState } from 'react';
import { sortBy } from 'lodash';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
import { useSelector, useDispatch } from 'react-redux';
import { Panel } from '../layout';
import Table, { Direction } from './elements/Table';
import { selectIsFetching, selectRepositories, setRepositories } from './repositoriesSlice';

const StyledPanel = styled(Panel)`
  grid-area: repositories;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  font-weight: bold;

  span {
    margin-left: 5px;
  }
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
  const [noDataMessage, setNoDataMessage] = useState('');
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    if (repositories.length === 0) {
      setNoDataMessage('No repositories for selected filtering options');
    }
  }, [repositories]);

  const handleFilterChange = (sortField: string, direction: Direction): void => {
    const sortedData = sortBy(repositories, [sortField]);
    if (direction === Direction.Desc) {
      sortedData.reverse();
    }
    dispatch(setRepositories(sortedData));
  };

  return (
    <StyledPanel>
      <Title>
        Repositories <span>({repositories.length}x)</span> {isFetching && <PuffLoader size={15} />}
      </Title>
      {repositories.length > 0 ? (
        <Table viewModel={viewModel} data={repositories} onFilterChange={handleFilterChange} />
      ) : (
        noDataMessage
      )}
    </StyledPanel>
  );
};

export default RepositoriesList;
