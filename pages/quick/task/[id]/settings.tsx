import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { withApollo } from '../../../../lib/apollo';
import { useTaskQuery, useCriteriasQuery } from '../../../../generated/graphql';
import CreateSettingsForm from '../../../../components/quick/settings/CreateSettingsForm'

const SettingPage: NextPage = () => {
  const router = useRouter();
  const id =
    typeof router.query.id === 'string' ? parseInt(router.query.id, 10) : NaN;
  const { loading, error, data, refetch } = useTaskQuery({
    variables: { id }
  });
  console.log('data', data)

  const task = data?.task;
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred.</p>
      ) : task ? (
        <>
          <p> some data</p>
            <CreateSettingsForm onTaskCreated={refetch} />
          </>
      ) : (
        <p>Task not found.</p>
      )}
    </>
  );
};

export default withApollo(SettingPage);
