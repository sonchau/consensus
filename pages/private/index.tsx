import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import CreateIssueForm from '../../components/quick/issue/CreateIssueForm';
import Drawer from '../../components/common/Drawer';
import DrawerContent from '../../components/quick/issue/DrawerContent';

interface InitialProps {}

interface Props extends InitialProps {}

const PrivatePage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data } = useIssueQuery({
    variables: { id: 0 }
  });
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }

  return (
    <>
      <p>Private page</p>
    </>
  );
};

const PrivatePageWithApollo = withApollo(PrivatePage);

export default PrivatePageWithApollo;
