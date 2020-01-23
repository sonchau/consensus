import React from 'react';
import {Setting, useSettingByTaskNameQuery, Criteria} from '../../../generated/graphql'
import SettingListItemRaw from './SettingListItemRaw'
import BackNext from '../../common/BackNext'

interface Props {
  task: string
  criterias: Criteria[]
}

const SettingList: React.FC<Props> = ({task, criterias}) => {
  const {loading, error, data} = useSettingByTaskNameQuery({
    variables: { task },
    // refetch after 500ms to get updated data
    pollInterval: 500, 
  })
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
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
            <BackNext backHref="/quick/task/[id]/settings" 
            asBackHref={`/quick/task/anumber/settings`} 
            nextHref="/quick/task/[id]/settings" 
            asNextHref={`/quick/task/anumber/settings`} /> 
          </>
        ): (
          <p className="no-tasks-message"> No settings</p>
        )}
    </ul>
  );
};

export default SettingList;
