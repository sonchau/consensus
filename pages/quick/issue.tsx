import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import CreateIssueForm from '../../components/quick/issue/CreateIssueForm';
import Drawer from '../../components/common/Drawer';
import DrawerContent from '../../components/quick/issue/DrawerContent';

interface InitialProps {}

interface Props extends InitialProps {}

const IssuePage: NextPage<Props, InitialProps> = props => {

  return (
    <>
    <Drawer buttonText="Help" component={<DrawerContent />} />
    <CreateIssueForm back="/" redirectUrl="/quick/criteria" /> 
    </>
  );
};

const IssuePageWithApollo = withApollo(IssuePage);

export default IssuePageWithApollo;
