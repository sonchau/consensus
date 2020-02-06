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
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(values => ({
      ...values,
      [name]: value
    }));
  };
  const handleScoreChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;
    setValues(values => ({
      ...values,
      [name]: parseInt(value, 10)
    }));
  };

  const [updateCriteria, {loading, error, data}] = useUpdateCriteriaMutation()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      updateCriteria( {
          variables: {
            input: values
          }
      })

  }
  const router = useRouter()

  useEffect(()=> {
      if(data && data.updateCriteria) {
        router.push('/quick/criteria')
      }
  }, [data])

  return (
    <>
      <h4>Update your objective</h4>
      <form onSubmit={handleSubmit} className="form">
          {error && <p> an error</p>}
        
        <Input
            name="name"
            placeholder="Your criteria"
            value={values.name}
            onChange={handleNameChange}
            
          />
          <Select name="score"  
            values={['1','2','3','4','5','6','7','8','9','10']} 
            defaultValue={values.score.toString()} 
            onChange={handleScoreChange}
            />
          <button disabled={loading} type="submit" className="button">
            {loading? "Loading" : "Update"}
          </button>
      </form>
    </>
  );
};

export default UpdateCriteriaForm;
