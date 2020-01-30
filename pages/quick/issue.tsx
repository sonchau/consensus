import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import CreateIssueForm from '../../components/quick/issue/CreateIssueForm';
interface InitialProps {}

interface Props extends InitialProps {}

const IssuePage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data } = useIssueQuery({
    variables: { id: 0 }
  });
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const issue = data?.issue;

  return (
    <CreateIssueForm />
  );
};

const IssuePageWithApollo = withApollo(IssuePage);

export default IssuePageWithApollo;
