import React, { useState, useEffect } from 'react';
import {Criteria, useCreateSettingMutation} from '../../../generated/graphql'
import SettingsListItem from './SettingsListItem';
import SettingBackNext from './SettingBackNext';
import { useRouter } from 'next/router';
import {getPrevNext} from '../../../utils/common';
import Link from 'next/link';

interface Props {
    onSettingsCreated: () => void
    criterias: Criteria[]
    task: string,
    taskId: number
}

const CreateSettingsForm: React.FC<Props> = ({ criterias, onSettingsCreated, task, taskId}) => {

  let items = criterias.map(criteria => {
    return {
      task,
      criteria: criteria.name,
      criteriaId: criteria.id,
      taskId: taskId,
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
    //console.log('onSettingItemCreated parent', item.criteria, item.score, 'updatedItems', updatedItems)
    setSettings(updatedItems)
  }
  // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  const router = useRouter();
  
  const taskIds =  typeof router.query.taskIds === 'string' ? router.query.taskIds : ''
  const prevNext = getPrevNext(taskId, taskIds)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!loading && settings) {
      settings.map(setting => {
        console.log('setting', setting)
        createSetting({
          variables: {
              input: setting
          }
       })
      })
    }

  }


  useEffect(()=> {
    if(data && data.createSetting) {
      console.log('effect')
      router.push(prevNext.next)
    }
}, [data])

  return (
    <form onSubmit={handleSubmit}>
      <h5>Give each solution a score out of 10 (where 10 is the highest) for how well it addresses each objective.</h5>    
      <ul>
        <li className="task-list-heading">
          <span> Your objective</span>
          <span className="last"> Weighting</span>
        </li>
        {criterias.map(criteria => {
          return <SettingsListItem key={criteria.id} criteria={criteria} onSettingItemCreated= {onSettingItemCreated}/>
        })}
      </ul>
      <input type="hidden" value={taskId} name="taskId"/>
      <input type="hidden" value={taskIds} name="taskIds"/>

      <div className="backnext">
        <Link href={prevNext.prev} >
          <button className="button first"> Prev </button>
        </Link>

        <button disabled={loading} type="submit" className="button last">
          {loading? "Loading" : "Next"}
        </button>
      </div>
      {/* <SettingBackNext currentTask={task} nextClick={handleSubmit}/>    */}
    </form>

  );
};

export default CreateSettingsForm;
