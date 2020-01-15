import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useTasksQuery, TaskStatus } from '../../generated/graphql';
import TaskList from '../../components/TaskList';
import CreateTaskForm from '../../components/CreateTaskForm';
import Issue from '../../components/quick/Issue';

interface InitialProps {}

interface Props extends InitialProps {}

const IssuePage: NextPage<Props, InitialProps> = props => {
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
      <Issue />
  );
};

const IssuePageWithApollo = withApollo(IssuePage);

export default IssuePageWithApollo;
