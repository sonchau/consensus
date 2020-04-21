import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useCriteriasByIssueIdQuery } from '../../generated/graphql';
import CriteriaList from '../../components/private/criteria/CriteriaList';
import CreateCriteriaForm from '../../components/private/criteria/CreateCriteriaForm';
import BackNext from '../../components/common/BackNext';
import {IssueContext} from '../../interface/common';
import LastestIssue from '../../components/quick/issue/LatestIssue';
import Drawer from '../../components/common/Drawer'
import DrawerContent from '../../components/quick/criteria/DrawerContent';
import Note from '../../components/quick/note/LatestNote';
import Cookie from 'js-cookie';
import { COOKIES } from "../../services/cookie";

interface InitialProps {}
interface Props extends InitialProps {}

const criteriasContainer = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'padding': '1rem'
}

const CriteriaPage: NextPage<Props, InitialProps> = props => {

  const user = Cookie.get(COOKIES.user) 
  const currentIssue = Number(Cookie.get(COOKIES.issue))
  const { loading, error, data, refetch } = useCriteriasByIssueIdQuery({
    variables: {
      issueId: currentIssue
    },
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const criterias = data?.criteriasByIssueId;
  
  return (
    <>
      <Note />
      <Drawer buttonText="Help" component={<DrawerContent />} />
      <LastestIssue />
      
      <CreateCriteriaForm onCriteriaCreated={refetch}/>
      {criterias && criterias.length ? (
        <div style={criteriasContainer}>
            <h4> Your objectives</h4>    
            <CriteriaList criterias={criterias} />
            <BackNext backHref="/private/issue" nextHref="/private/vote" /> 
        </div>
      ) : (
        <p className="no-tasks-message"></p>
      )}
      
    </>
  );
};

const CriteriaPageWithApollo = withApollo(CriteriaPage);

export default CriteriaPageWithApollo;

