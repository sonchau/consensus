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
        //console.log('setting', setting)
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
      //console.log('effect')
      router.push(prevNext.next)
    }
}, [data])

  return (

    <form onSubmit={handleSubmit}>
      <h3> Step 4: How does <strong className={prevNext.displayColor}>"{task}"</strong> score against your objective?</h3>
      <p>"The time has come to measure your options against each of your objectives. the question you are asking is "How closely does this option meet this particular objective?"</p>
      <p>Keep notes on the factors affecting your scoring of the options. They may come in useful if you decide to restart the process. For example, it may become apparent that one of more of your objectives were not as important as first thought, or there might be another option you'd like to put on the table.</p>
      <p>Give each option a score out of 10 (where 10 is the highest) for how well it addresses each objective.</p>    
      <ul>
        <li className="task-list-heading">
          <span> Your objective</span>
          <span className="last">Score</span>
        </li>
        {criterias.map(criteria => {
          return <SettingsListItem key={criteria.id} criteria={criteria} onSettingItemCreated= {onSettingItemCreated}/>
        })}
      </ul>
      <input type="hidden" value={taskId} name="taskId"/>
      <input type="hidden" value={taskIds} name="taskIds"/>

      <div className="backnext">
        <Link href={prevNext.prev} >
          <button className="button first"> Back </button>
        </Link>

        <button disabled={loading} type="submit" className="button last">
          {loading? "Loading" : "Next"}
        </button>
      </div>
    </form>

  );
};

export default CreateSettingsForm;
