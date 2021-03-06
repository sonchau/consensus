import React, {useEffect} from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import CreateIssueForm from '../../components/quick/issue/CreateIssueForm';
import Drawer from '../../components/common/Drawer';
import DrawerContent from '../../components/quick/issue/DrawerContent';
import { privateRoute } from "../../components/route/Private";

interface InitialProps {}
interface Props extends InitialProps {}

const DashboardPage: NextPage<Props, InitialProps> = () => {
  
  return (
    <>
      <Drawer buttonText="Help" component={<DrawerContent />} />
      <CreateIssueForm back="/online/dashboard" redirectUrl="" /> 
    </>
  );
};

const OnlinePrivate = privateRoute(DashboardPage)

const DashboardPageWithApollo = withApollo(OnlinePrivate);

export default DashboardPageWithApollo;
