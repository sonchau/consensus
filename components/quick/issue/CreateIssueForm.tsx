
import React, { useState } from 'react';
import {useCreateIssueMutation} from '../../../generated/graphql'
import Link from 'next/link';
import BackNext from '../../common/BackNext';
import {useRouter} from 'next/router';

const issueStyle = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'outline': 'none',
    padding: '1rem',
    width: '100%',
    'fontSize': 'inherit'
  };

const red = {
  'color': 'red'
}

const blue = {
  'color': 'blue'
}
  
const CreateIssueForm: React.FC  = () => {
    const [issue, setIssue] = useState('')
    const router = useRouter()
    const [createIssue, {loading, error, data}] = useCreateIssueMutation( {
        onCompleted: ()=> {
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
            //window.location.href='/quick/criteria'
            router.push('/quick/criteria')
        }
    }
    return   (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {error && <p className="alert-error"> Some error </p>}

                <h2>Step 1: State your problem</h2>
                <p>Clearly state the problem you are here to solve. Try to state it in a way that defines the cause and primary consequence of the problem. </p>
                <p>For example: Because our maternal and child health clinic is too small to meet demand (the cause), more residents are missing out on health services (the consequence).</p>
                <p>
                    <input
                    type="text"
                    name="issue"
                    style={issueStyle}
                    placeholder="Type in your problem here."
                    autoComplete="off"
                    value={issue}
                    onChange={handleChange}
                    />
                </p>
                <div className="backnext" >
                <Link href='/'>
                    <a className="button back medium"></a>
                </Link>
                <button  type="submit" className="button medium last">
                Next >
                </button>
                </div>
            </form>
        </div>
      );
}

  
export default CreateIssueForm;