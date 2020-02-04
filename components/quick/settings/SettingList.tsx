import React from 'react';
import {Setting, useSettingByTaskNameQuery, Criteria} from '../../../generated/graphql'
import SettingListItemRaw from './SettingListItemRaw'
import SettingBackNext from './SettingBackNext'
import CreateSettingsForm from './CreateSettingsForm';
interface Props {
  task: string
  criterias: Criteria[]
  taskId: number
}

const SettingList: React.FC<Props> = ({task, criterias, taskId}) => {
  const {loading, error, data, refetch} = useSettingByTaskNameQuery({
    variables: { task },
    // refetch after 500ms to get updated data
    pollInterval: 500, 
  })
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred 111.</p>;
  }

  const settings = data?.settingByTaskName;
  return (
    <ul>
        {settings && settings.length ? (
          <>
            <h5> Your selection</h5>
            {settings.map(setting => {
              return <SettingListItemRaw key={setting.id} setting = {setting} />
            })}
            <SettingBackNext currentTask={task} /> 
          </>
        ): (
          <CreateSettingsForm criterias={criterias} onSettingsCreated={refetch} task={task} taskId={taskId}/>

        )}
    </ul>
  );
};

export default SettingList;
