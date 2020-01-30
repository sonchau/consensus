import React, { useState } from 'react';
import {useCreateCriteriaMutation} from '../../../generated/graphql'
import Input from '../../common/Input'
import Select from '../../common/Select'

interface Props {
  onCriteriaCreated: () => void
}

const select = {
  'fontSize': 'inherit'
}

const CreateCriteriaForm: React.FC<Props> = ({onCriteriaCreated}) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('1');
  const [createCriteria, {loading, error, data}] = useCreateCriteriaMutation( {
      onCompleted: ()=> {
        onCriteriaCreated()
        setName('')
        setScore('1')
      }
  })

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  

  const handleScoreChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setScore(event.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!loading && name) {
      const inputScore = typeof score === 'string' ? parseInt(score, 10) : 1;
        createCriteria({
            variables: {
                input: {
                    name,
                    score: inputScore
                }
            }
        })
    }

  }
  return (
    <>
      <h3> How will you define success? </h3>
      <p>Create a list of criteria by which your proposed solutions will be measured.</p>
      <p>Give each criteria a weighting out of 10, with 1 the least important and 10 the most important.</p>
      <form onSubmit={handleSubmit} className="form">
          {error && <p className="alert-error"> Some error </p>}

        <Input
          name="name"
          placeholder="Your criteria"
          value={name}
          onChange={onInputChange}
        />
        <Select name="score" onChange={handleScoreChange} values={['1','2','3','4','5','6','7','8','9','10']} />
        <button disabled={loading} type="submit" className="button">
          {loading? "Loading" : "Add"}
        </button>
      </form>
    </>
  );
};

export default CreateCriteriaForm;
