import React, { useState } from 'react';
import {useCreateCriteriaMutation} from '../../../generated/graphql'
import Input from '../../common/Input'
import Select from '../../common/Select'

interface Props {
  onCriteriaCreated: () => void
}


const CreateCriteriaForm: React.FC<Props> = ({onCriteriaCreated}) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [hasError, setHasError] = useState(false)

  const [createCriteria, {loading, error, data}] = useCreateCriteriaMutation( {
      onCompleted: ()=> {
        onCriteriaCreated()
        setName('')
        setScore('')
        setHasError(false)
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
    if(score === '' || score === 'Weighting') {
      setHasError(true)
      return
    }

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
      <h3> How will you measure success? </h3>
      <p>List the objectives you hope to achieve by solving this problem and then give each objective a relative weighting (out of 10), where 1 means it is relatively less important and 10 is very important.</p>
      {error && <p className="alert-error"> Some error </p>}
      {hasError && <p className="alert-error"> Please select weighting</p>}
      <form onSubmit={handleSubmit} className="form">

        <Input
          name="name"
          placeholder="Your objective"
          value={name}
          onChange={onInputChange}
        />
        <Select name="score" onChange={handleScoreChange} values={['Weighting','1','2','3','4','5','6','7','8','9','10']} />
        <button disabled={loading} type="submit" className="button">
          {loading? "Loading" : "Add"}
        </button>

      </form>
    </>
  );
};

export default CreateCriteriaForm;
