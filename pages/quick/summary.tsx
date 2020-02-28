import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useSettingsQuery } from '../../generated/graphql';
import SettingSummaryList from '../../components/quick/settings/SettingSummaryList';
import BackNext from '../../components/common/BackNext';
import _ from 'underscore';
import LastestIssue from '../../components/quick/issue/LatestIssue';
import Note from '../../components/quick/note/LatestNote';
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
  let lastTaskId, backHref = ''
  if (settings && settings.length) {
    lastTaskId = _.last(settings)?.taskId
    backHref = `/quick/task/${lastTaskId}/settings`
  }
  
  //console.log('settings', settings, 'lastTaskId', lastTaskId)
  return (
    <>
      <Note />
      <LastestIssue />
      {settings && settings.length ? (
        <div style={criteriasContainer}>
            <SettingSummaryList settings={settings} />    
        </div>
      ) : (
        <p className="no-tasks-message">There are no settings here.</p>
      )}
      <BackNext backHref={backHref} nextHref="/quick/result" /> 
    </>
  );
};

const SummaryPageWithApollo = withApollo(SummaryPage);

export default SummaryPageWithApollo;
