import React, { useState, useEffect } from 'react';
import { useUpdateCriteriaMutation } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import Input from '../../common/Input'
import Select from '../../common/Select'

interface Values {
  id: number;
  name: string;
  score: number;
}

interface Props {
  initialValues: Values;
}

const UpdateCriteriaForm: React.FC<Props> = ({ initialValues }) => {
  const [values, setValues] = useState<Values>(initialValues);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };

  const [updateTask, {loading, error, data}] = useUpdateCriteriaMutation()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // updateTask( {
      //     variables: {
      //       input: values
      //     }
      // })

  }
  // const router = useRouter()

  // useEffect(()=> {
  //     if(data && data.updateTask) {
  //       router.push('/')
  //     }
  // }, [data])

  return (
    <form onSubmit={handleSubmit}>
        {error && <p> an error</p>}
      <label className="field-label">Update your criteria</label>
      <Input
          name="name"
          placeholder="Your criteria"
          value={values.name}
          
        />
        <Select name="score"  values={['1','2','3','4','5','6','7','8','9','10']} selectedItem={values.score.toString()}/>
        <button disabled={loading} type="submit" className="button">
          {loading? "Loading" : "Update"}
        </button>
    </form>
  );
};

export default UpdateCriteriaForm;
