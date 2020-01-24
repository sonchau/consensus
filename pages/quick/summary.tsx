import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useSettingsQuery } from '../../generated/graphql';
import SettingSummaryList from '../../components/quick/settings/SettingSummaryList';
import BackNext from '../../components/common/BackNext';

interface InitialProps {}

interface Props extends InitialProps {}

const criteriasContainer = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'padding': '1rem'
}

const SummaryPage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data, refetch } = useSettingsQuery({

  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const settings = data?.settings;
    //console.log('settings', settings)
  return (
    <>
      <h4>Finalise your scores</h4>
      {settings && settings.length ? (
        <div style={criteriasContainer}>
            <SettingSummaryList settings={settings} />    
        </div>
      ) : (
        <p className="no-tasks-message">There are no settings here.</p>
      )}
      <BackNext backHref="/quick/issue" nextHref="/quick/task" /> 
    </>
  );
};

const SummaryPageWithApollo = withApollo(SummaryPage);

export default SummaryPageWithApollo;
