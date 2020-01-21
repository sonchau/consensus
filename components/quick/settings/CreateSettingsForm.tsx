import React, { useState } from 'react';
import {useCreateTaskMutation} from '../../../generated/graphql'
import Input from '../../common/Input'

interface Props {
    onTaskCreated: () => void
}
const CreateSettingsForm: React.FC<Props> = ({onTaskCreated}) => {
  // const [title, setTitle] = useState('');
  // const [createTask, {loading, error, data}] = useCreateTaskMutation( {
  //     onCompleted: ()=> {
  //       onTaskCreated()
  //       setTitle('')
  //     }
  // })

  // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   if(!loading && title) {
  //       createTask({
  //           variables: {
  //               input: {
  //                   title
  //               }
  //           }
  //       })
  //   }

  // }
  return (
    <>
      <h2>Task settings form</h2>

    </>  
  );
};

export default CreateSettingsForm;
