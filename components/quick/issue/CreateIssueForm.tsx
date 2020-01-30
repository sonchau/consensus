
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
        <form onSubmit={handleSubmit} style={issueStyle} >
            {error && <p className="alert-error"> Some error </p>}

            <h2>State your problem</h2>
            <p>
                <input
                type="text"
                name="issue"
                style={issueStyle}
                placeholder="Type in your problem here. Aim to state it clearly and in a way that defines the cause and the primary consequence of the problem."
                autoComplete="off"
                value={issue}
                onChange={handleChange}
                />
            </p>
            <p><span>For example: </span> 
              <span style={red}>Our maternal and child health clinic is too small </span>
              <span style={blue}>to meet growing local demand</span> 
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
      );
}

  
export default CreateIssueForm;