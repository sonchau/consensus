import React, {useEffect} from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import VoteForm from '../../components/quick/vote/VoteForm';
import Drawer from '../../components/common/Drawer';
import DrawerContent from '../../components/quick/issue/DrawerContent';
import { privateRoute } from "../../components/route/Private";

interface InitialProps {}
interface Props extends InitialProps {}

const VotePage: NextPage<Props, InitialProps> = () => {
  
  const doSomething = () => {

  }
  return (
    <>
      <Drawer buttonText="Help" component={<DrawerContent />} />
      <VoteForm onVoteCreated={doSomething}/>
    </>
  );
};

const VotePagePrivate = privateRoute(VotePage)

const VotePageWithApollo = withApollo(VotePagePrivate);

export default VotePageWithApollo;
