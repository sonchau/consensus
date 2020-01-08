import React from 'react';
import { NextPage } from 'next';
import {withApollo} from '../lib/apollo';
import { useTaskQuery, TaskStatus } from '../generated/graphql';

interface InitialProps {

}

interface Props extends InitialProps {

}

interface TasksQueryVariables {
    status: string
}
const IndexPage: NextPage<Props, InitialProps> = (props) => {
    const {loading, error, data} = useTaskQuery({
        variables: {status: TaskStatus.Active}
    })
    
    if (loading) {
        return (<p> Loading </p>)
    } else if (error ){
        return (<p> Error</p>)
    }

    const tasks = data?.tasks
    return tasks ? (
        <ul>
        {tasks.map(task => {
        return <li key={task.id}>{task.title}</li>
        })}
        </ul>) :
        (
            <p> No tasks</p>
        )
}

const IndexPageWithApollo = withApollo(IndexPage)
export default IndexPageWithApollo
