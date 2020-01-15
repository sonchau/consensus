import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import TaskList from '../../components/TaskList';
import CreateTaskForm from '../../components/CreateTaskForm';
import Issue from '../../components/quick/Issue';

interface InitialProps {}

interface Props extends InitialProps {}

const IssuePage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data, refetch } = useIssueQuery({
    variables: { id: 0 }
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const tasks = data?.issue;

  return (
    <Issue onIssueCreated={refetch}/>
  );
};

const IssuePageWithApollo = withApollo(IssuePage);

export default IssuePageWithApollo;
