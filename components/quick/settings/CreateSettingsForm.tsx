import React, { useState } from 'react';
import {Criteria, useCreateSettingMutation} from '../../../generated/graphql'
import SettingsListItem from './SettingsListItem';
import BackNext from '../../common/BackNext';

interface Props {
    onSettingsCreated: () => void
    criterias: Criteria[]
    task: string 
}

const CreateSettingsForm: React.FC<Props> = ({ criterias, onSettingsCreated, task}) => {

  let items = criterias.map(criteria => {
    return {
      task,
      criteria: criteria.name,
      'score': 1
    }
  })
  const [settings, setSettings] = useState(items);
  const [createSetting, {loading, error, data}] = useCreateSettingMutation( {
      onCompleted: ()=> {
        onSettingsCreated()
      }
  })

  const onSettingItemCreated = (item: any ) => {
    
    const objIndex = settings.findIndex(obj => obj.criteria === item.criteria)
    const updatedObj = { ...settings[objIndex], score: parseInt(item.score, 10)}
    const updatedItems = [
      ...settings.slice(0, objIndex),
      updatedObj,
      ...settings.slice(objIndex+1)
    ]
    console.log('onSettingItemCreated parent', item.criteria, item.score, 'updatedItems', updatedItems)
    setSettings(updatedItems)
  }
  // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!loading && settings) {
      settings.map(setting => {
        createSetting({
          variables: {
              input: setting
          }
       })
      })

    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {criterias.map(criteria => {
          return <SettingsListItem key={criteria.id} criteria={criteria} onSettingItemCreated= {onSettingItemCreated}/>
        })}
      </ul>
      <button disabled={loading} type="submit" className="button">
          {loading? "Loading" : "Add"}
        </button>
    </form>

  );
};

export default CreateSettingsForm;
