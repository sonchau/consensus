import React from 'react'
import {useTasksQuery, TaskStatus} from '../../../generated/graphql'

import BackNext from '../../common/BackNext'

interface Props{
    currentTask: string,
    nextClick?:(e: React.FormEvent<HTMLButtonElement>) => void,
}

const SettingBackNext: React.FC<Props> = ({currentTask, nextClick}) => {

    const { loading, error, data, refetch } = useTasksQuery({
        variables: { status: TaskStatus.Active }
    });

    if (loading) {
        return <p>Loading...</p>;
      } else if (error) {
        return <p>An error occurred.</p>;
      }
    const tasks = data?.tasks;
    let backHref='', asBackHref='', nextHref='', asNextHref=''
    if(tasks && tasks.length) {
        const objIndex = tasks.findIndex(obj => obj.title === currentTask)
        //console.log('objIndex', objIndex, 'currentTask', currentTask, tasks)
        if (tasks.length === 1) {
            backHref = '/quick/task'
            nextHref = '/quick/summary'
        } else {
            
            if(objIndex ===0) {
                //console.log('first')
                //first task
                backHref = '/quick/task'
                nextHref = '/quick/task/[id]/settings'
                asNextHref = `/quick/task/${tasks[objIndex+1].id}/settings`
            } else if (objIndex === tasks.length -1) {
                //last task
                //console.log('last')
                backHref = '/quick/task/[id]/settings'
                asBackHref = `/quick/task/${tasks[objIndex-1].id}/settings`
                nextHref = '/quick/summary'
            } else {
                //middle task
                //console.log('middle')
                backHref = '/quick/task/[id]/settings'
                asBackHref = `/quick/task/${tasks[objIndex-1].id}/settings`
                nextHref = '/quick/task/[id]/settings'
                asNextHref = `/quick/task/${tasks[objIndex+1].id}/settings`
            }
        }
    }
    
    return (

        <BackNext backHref= {backHref}
        asBackHref= {asBackHref} 
        nextHref= {nextHref}
        asNextHref={asNextHref} nextClick={nextClick}/> 
    )
}

export default SettingBackNext

