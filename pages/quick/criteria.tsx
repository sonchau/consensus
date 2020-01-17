import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useCriteriasQuery } from '../../generated/graphql';
import CriteriaList from '../../components/quick/criteria/CriteriaList';
import CreateCriteriaForm from '../../components/quick/criteria/CreateCriteriaForm';

interface InitialProps {}

interface Props extends InitialProps {}

const criteriasContainer = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'padding': '1rem'
}

const IndexPage: NextPage<Props, InitialProps> = props => {
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
      <CreateCriteriaForm onCriteriaCreated={refetch}/>
      {criterias && criterias.length ? (
        <div style={criteriasContainer}>
            <h4> Your criterias</h4>    
            <CriteriaList criterias={criterias} />
        </div>
      ) : (
        <p className="no-tasks-message">There are no tasks here.</p>
      )}
    </>
  );
};

const IndexPageWithApollo = withApollo(IndexPage);

export default IndexPageWithApollo;
