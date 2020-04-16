
import React, { useState } from 'react';
import {useCreateIssueMutation} from '../../../generated/graphql'
import Link from 'next/link';
import BackNext from '../../common/BackNext';
import {useRouter} from 'next/router';
import Cookie from 'js-cookie';
import { COOKIES } from "../../../services/cookie";

const issueStyle = {
    'border': '1px solid #e2e8f0',
    'borderRadius': '1rem',
    'outline': 'none',
    padding: '1rem',
    width: '100%',
    'fontSize': 'inherit'
  };

interface Props {
    redirectUrl: string,
    back: string
}
const CreateIssueForm: React.FC<Props>  = ({redirectUrl, back}) => {
    const [issue, setIssue] = useState('')
    const router = useRouter()
    const user = Cookie.get(COOKIES.user) ? Cookie.get(COOKIES.user) : 'public'

    const [createIssue, {loading, error, data}] = useCreateIssueMutation( {
        onCompleted: ()=> {
          setIssue('')
          //console.log('complete data', data)
        }
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIssue(e.target.value);
      };
  
    async function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if(!loading && issue && user) {
            let result
            try {
                result = await createIssue({
                    variables: {
                        input: {
                            issue,
                            user
                        }
                    }
                })
                //console.log('result data', result)
                if (result && result.data){
                    //localStorage.setItem('issueId', result.data.createIssue!.id.toString())
                    Cookie.set(COOKIES.issue, result.data.createIssue!.id.toString())
                }
            } catch {
                console.log('can not create issue')
            }
            router.push(redirectUrl)
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
                <Link href={back}>
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