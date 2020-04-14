import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import CreateIssueForm from '../../components/quick/issue/CreateIssueForm';
import Drawer from '../../components/common/Drawer';
import DrawerContent from '../../components/quick/issue/DrawerContent';
import BackNext from '../../components/common/BackNext';
import { privateRoute } from "../../components/route/Private";

interface InitialProps {}

interface Props extends InitialProps {}

const DashboardPage: NextPage<Props, InitialProps> = props => {

  return (
    <>
      <Drawer buttonText="Help" component={<DrawerContent />} />
      <div className="form-container">
        <h2>Group Voting</h2>
        <p>Suitable for a facilator in front of a large group of participants.</p>
        <p>Participants will be able to vote using their mobile devices.</p>
        <p>If you would like to <a href="">download</a> a facilotors guide.</p>
        <BackNext backHref="/" nextHref="/private/issue" /> 
      </div>
    </>
  );
};

const DashboardPagePrivate = privateRoute(DashboardPage);
const DashboardPageWithApollo = withApollo(DashboardPagePrivate);

export default DashboardPageWithApollo;
