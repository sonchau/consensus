import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useCriteriasQuery } from '../../generated/graphql';
import CriteriaList from '../../components/quick/criteria/CriteriaList';
import CreateCriteriaForm from '../../components/quick/criteria/CreateCriteriaForm';
import BackNext from '../../components/common/BackNext';
import {IssueContext} from '../../interface/common';
import LastestIssue from '../../components/quick/issue/LatestIssue';
import Drawer from '../../components/common/Drawer'
import DrawerContent from '../../components/quick/criteria/DrawerContent';

interface InitialProps {}

interface Props extends InitialProps {}

const criteriasContainer = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'padding': '1rem'
}

const CriteriaPage: NextPage<Props, InitialProps> = props => {

  const { loading, error, data, refetch } = useCriteriasQuery({
      
  });


  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const criterias = data?.criterias;
  
  return (
    <>
      <Drawer buttonText="Help" component={<DrawerContent />} />
      <LastestIssue />
      
      <CreateCriteriaForm onCriteriaCreated={refetch}/>
      {criterias && criterias.length ? (
        <div style={criteriasContainer}>
            <h4> Your objectives</h4>    
            <CriteriaList criterias={criterias} />
            <BackNext backHref="/quick/issue" nextHref="/quick/task" /> 
        </div>
       
      ) : (
        <p className="no-tasks-message"></p>
      )}
      
    </>
  );
};

const CriteriaPageWithApollo = withApollo(CriteriaPage);

export default CriteriaPageWithApollo;

