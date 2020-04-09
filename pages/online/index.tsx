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

const OnlinePage: NextPage<Props, InitialProps> = () => {
  
  return (
    <>
      <p>Online page 111</p>
    </>
  );
};

const OnlinePrivate = privateRoute(OnlinePage)

const OnlinePageWithApollo = withApollo(OnlinePrivate);

export default OnlinePageWithApollo;
