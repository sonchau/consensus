import React, { useState, useEffect } from 'react';
import { useUpdateTaskMutation } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import Input from '../../common/Input'
interface Values {
    id: number;
  title: string;
}

interface Props {
  initialValues: Values;
}

const UpdateTaskForm: React.FC<Props> = ({ initialValues }) => {
  const [values, setValues] = useState<Values>(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const [updateTask, {loading, error, data}] = useUpdateTaskMutation()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      updateTask( {
          variables: {
            input: values
          }
      })

  }
  const router = useRouter()

  useEffect(()=> {
      if(data && data.updateTask) {
        router.push('/quick/task')
      }
  }, [data])

  return (
    <>
     <h4>Update your task</h4>

    <form onSubmit={handleSubmit} className="form">
        {error && <p> an error</p>}

         <Input
            name="title"
            placeholder="Your criteria"
            value={values.title}
            onChange={handleChange}
            
          />
        <span>&nbsp;</span>
        <button disabled={loading} type="submit" className="button">
          {loading? "Loading" : "Save"}
        </button>
    </form>
    </>
  );
};

export default UpdateTaskForm;
