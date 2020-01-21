import React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useTasksQuery, TaskStatus } from '../../generated/graphql';
import TaskList from '../../components/quick/task/TaskList';
import CreateTaskForm from '../../components/quick/task/CreateTaskForm';
import BackNext from '../../components/common/BackNext';

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

  return (
    <>
      <CreateTaskForm onTaskCreated={refetch}/>
      {tasks && tasks.length ? (
        <div style={criteriasContainer}>
            <h4>Your solutions</h4>    
            <TaskList tasks={tasks} />
        </div>
      ) : (
        <p className="no-tasks-message">There are no tasks here.</p>
      )}
      <BackNext backHref="/quick/criteria" nextHref="/quick/task" /> 
    </>
  );
};

const TaskPageWithApollo = withApollo(TaskPage);

export default TaskPageWithApollo;
//<Link href="/quick/criteria/update/[criteriaid]" as={`/quick/criteria/update/${criteria.id}`}>