import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useTasksQuery, TaskStatus } from '../../generated/graphql';
import TaskList from '../../components/quick/task/TaskList';
import CreateTaskForm from '../../components/quick/task/CreateTaskForm';
import BackNext from '../../components/common/BackNext';
import LastestIssue from '../../components/quick/issue/LatestIssue';
import _ from 'underscore';

interface InitialProps {}

interface Props extends InitialProps {}

const criteriasContainer = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'padding': '1rem'
}

const TaskPage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data, refetch } = useTasksQuery({
    variables: {status: TaskStatus.Active}
  });

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred.</p>;
  }
  const tasks = data?.tasks;
  const taskIds = (tasks && tasks.length) ?  _.pluck(tasks, 'id').join('_') : ''
  console.log('tasks', taskIds)
  return (
    <>
      <LastestIssue />
      <CreateTaskForm onTaskCreated={refetch}/>
      {tasks && tasks.length ? (
        <div style={criteriasContainer}>
            <h4>Your solutions</h4>    
            <TaskList tasks={tasks} />

            <BackNext backHref="/quick/criteria" 
            nextHref="/quick/task/[id]/[taskIds]" 
            asNextHref={`/quick/task/${tasks[0].id}/${taskIds}`} /> 
        </div>
        
      ) : (
        <p className="no-tasks-message"></p>
      )}
    </>
  );
};

const TaskPageWithApollo = withApollo(TaskPage);

export default TaskPageWithApollo;
