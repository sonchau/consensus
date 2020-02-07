import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useSettingsQuery } from '../../generated/graphql';
import ResultList from '../../components/quick/result/ResultList';
import BackNext from '../../components/common/BackNext';
import _ from 'underscore';
import LastestIssue from '../../components/quick/issue/LatestIssue';

interface InitialProps {}

interface Props extends InitialProps {}

const criteriasContainer = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'padding': '1rem',
    'marginBottom': '1rem'
}

const ResultPage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data, refetch } = useSettingsQuery({

  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred on result page.</p>;
  }
  const settings = data?.settings 
  //console.log('settings', settings, 'lastTaskId', lastTaskId)
  return (
    <>
      <LastestIssue />
      <h4>Your result</h4>
      {settings && settings.length ? (
        <div style={criteriasContainer}>
            <ResultList settings={settings} />    
        </div>
      ) : (
        <p className="no-tasks-message">There are no result here.</p>
      )}
      <button disabled={loading} className="button">
        Start Again
      </button>
    </>
  );
};

const ResultPageWithApollo = withApollo(ResultPage);

export default ResultPageWithApollo;
