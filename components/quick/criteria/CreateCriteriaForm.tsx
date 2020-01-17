import React, { useState } from 'react';
import {useCreateCriteriaMutation} from '../../../generated/graphql'
import Input from '../../common/Input'
import Select from '../../common/Select'

interface Props {
  onCriteriaCreated: () => void
}

const form = {
  'display': 'grid',
  'gridTemplateColumns': '80% 3rem 1fr',
  padding: '1rem',
  'border': '1px solid #e2e8f0',
  'borderRadius': '1rem',
  'marginBottom': '1rem',
  'gridGap': '1rem'
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
      <h2> How will you define success? </h2>
      <p>Create a list of criteria by which your proposed solutions will be mesured.</p>
      <p>Give each criteria a weighting out of 10, with 1 the least important and 10 the most important</p>
      <form onSubmit={handleSubmit} style={form}>
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
