import React, { useState } from 'react';
import {useCreateTaskMutation} from '../../../generated/graphql'
import Input from '../../common/Input'

interface Props {
    onTaskCreated: () => void
}
const CreateTaskForm: React.FC<Props> = ({onTaskCreated}) => {
  const [title, setTitle] = useState('');
  const [createTask, {loading, error, data}] = useCreateTaskMutation( {
      onCompleted: ()=> {
        onTaskCreated()
        setTitle('')
      }
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!loading && title) {
        createTask({
            variables: {
                input: {
                    title
                }
            }
        })
    }

  }
  return (
    <div className="form-container">
      <h2>Step 3: What are your potential options?</h2>
      <p>Describe your option/s in simple, short and clear language</p>
      <form onSubmit={handleSubmit}  className="form">
          {error && <p className="alert-error"> Some error </p>}
          
        <Input
          name="title"
          placeholder="Your solution"
          value={title}
          onChange={onInputChange}
        />   
        <span>&nbsp;</span>     
        <button disabled={loading} type="submit" className="button">
          {loading? "Loading" : "Add"}
      </button>

      </form>
    </div>  
  );
};

export default CreateTaskForm;
