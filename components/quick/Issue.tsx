
import React, { useState } from 'react';
import {useCreateIssueMutation} from '../../generated/graphql'
import Link from 'next/link';
import BackNext from '../common/BackNext';

const issueStyle = {
    'border': '1px solid #e2e8f0',
    'border-radius': '1rem',
    'outline': 'none',
    padding: '1rem',
    width: '100%',
    'font-size': 'inherit'
  };

  interface Props {
    onIssueCreated: () => void
}
  
  const CreateIssueForm: React.FC<Props>  = ({onIssueCreated}) => {
    const [issue, setIssue] = useState('')
    const [createIssue, {loading, error, data}] = useCreateIssueMutation( {
        onCompleted: ()=> {
          onIssueCreated()
          setIssue('')
        }
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIssue(e.target.value);
      };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!loading && issue) {
            createIssue({
                variables: {
                    input: {
                        issue
                    }
                }
            })
        }
    }
    return   (
        <form onSubmit={handleSubmit} style={issueStyle} >
            {error && <p className="alert-error"> Some error </p>}

            <h2>State your problem</h2>
            <p>
                <input
                type="text"
                name="issue"
                style={issueStyle}
                placeholder="Describe your issue"
                autoComplete="off"
                value={issue}
                onChange={handleChange}
                />
            </p>
            <BackNext backHref="/" nextHref="/quick/issue/definition" />
        </form>
      );
  }

  
  export default CreateIssueForm;