import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { withApollo } from '../../../../lib/apollo';
import { useTaskQuery, useCriteriasQuery } from '../../../../generated/graphql';
import CreateSettingsPage from '../../../../components/quick/settings/CreateSettingsPage'
import LastestIssue from '../../../../components/quick/issue/LatestIssue';
import Drawer from '../../../../components/common/Drawer'
import DrawerContent from '../../../../components/quick/task/DrawerContent';

const SettingPage: NextPage = () => {
  const router = useRouter();
  console.log('router', router)
  const id =
    typeof router.query.id === 'string' ? parseInt(router.query.id, 10) : NaN;
  const { loading, error, data, refetch } = useTaskQuery({
    variables: { id }
  });
  console.log('data', data)

  const task = data?.task;
  return (
    <>
      <Drawer buttonText="Help" component={<DrawerContent />} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred.</p>
      ) : task ? (
        <>
          <LastestIssue />
          <CreateSettingsPage task={task.title} taskId={task.id} />
          </>
      ) : (
        <p>Task not found.</p>
      )}
    </>
  );
};

export default withApollo(SettingPage);
