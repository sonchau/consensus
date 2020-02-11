import React, { useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { useCriteriasQuery } from '../../../generated/graphql';
import {useCreateTaskMutation} from '../../../generated/graphql'
import Input from '../../common/Input'
import CreateSettingsForm from './CreateSettingsForm';
import SettingList from './SettingList';

import SettingBackNext from './SettingBackNext'

interface InitialProps {
  task: string,
  taskId: number,
}

interface Props extends InitialProps {}
const criteriasSettingsContainer = {
  'border': '1px solid #e2e8f0',
  'borderRadius': '1rem',
  'padding': '1rem'
}
const CreateSettingsPage: NextPage<Props, InitialProps> = props => {
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
        {criterias && criterias.length ? (
        <div style={criteriasSettingsContainer}> 
            {/* <SettingList criterias={criterias} task={props.task} taskId={props.taskId}/> */}
            <CreateSettingsForm criterias={criterias} onSettingsCreated={refetch} task={props.task} taskId={props.taskId}/>
            
        </div>
      ) : (
        <p className="no-tasks-message"></p>
      )}
    </>  
  );
};

export default CreateSettingsPage;
