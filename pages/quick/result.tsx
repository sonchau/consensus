import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useSettingsQuery } from '../../generated/graphql';
import ResultList from '../../components/quick/result/ResultList';
import BackNext from '../../components/common/BackNext';
import _ from 'underscore';
import LastestIssue from '../../components/quick/issue/LatestIssue';
import ResultChart from '../../components/quick/result/ResultChart'
import ResultTop from '../../components/quick/result/ResultTop'

interface InitialProps {}

interface Props extends InitialProps {}

const criteriasContainer = {

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
      <h4>Results</h4>

      {settings && settings.length ? (
        <>
            <hr />
            <ResultTop settings={settings} />
            <hr />
            <div style={criteriasContainer}>
                <ResultChart settings={settings} />
                <ResultList settings={settings} />    
            </div>
          </>
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
