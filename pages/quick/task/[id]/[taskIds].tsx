import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { withApollo } from '../../../../lib/apollo';
import { useTaskQuery, useCriteriasQuery } from '../../../../generated/graphql';
import CreateSettingsPage from '../../../../components/quick/settings/CreateSettingsPage'
import LastestIssue from '../../../../components/quick/issue/LatestIssue';

const SettingPage: NextPage = () => {
  const router = useRouter();
  //console.log('router', router)
  const id =
    typeof router.query.id === 'string' ? parseInt(router.query.id, 10) : NaN;
  const { loading, error, data, refetch } = useTaskQuery({
    variables: { id }
  });
  //console.log('data', data)

  const task = data?.task;
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred.</p>
      ) : task ? (
        <>
          <LastestIssue />
          <p> How does <strong>"{task.title}"</strong> score against your objective?</p>
            <CreateSettingsPage task={task.title} taskId={task.id} />
          </>
      ) : (
        <p>Task not found.</p>
      )}
    </>
  );
};

export default withApollo(SettingPage);