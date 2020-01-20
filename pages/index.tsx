import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../lib/apollo';
import { useTasksQuery, TaskStatus } from '../generated/graphql';
import Dashboard from '../components/Dashboard';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data, refetch } = useTasksQuery({
    variables: { status: TaskStatus.Active }
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const tasks = data?.tasks;

  return (
      <Dashboard />
  );
};

const IndexPageWithApollo = withApollo(IndexPage);

export default IndexPageWithApollo;