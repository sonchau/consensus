import React, {useEffect} from 'react';
import {  useResetMutation } from '../../../generated/graphql';
import { useRouter } from 'next/router';

const ResultReset: React.FC = () => {

   const [resetMutation, { data, loading, error }] = useResetMutation({});

  const reset = (e: React.FormEvent<HTMLElement>) => {
    console.log('reset', reset)
    resetMutation()
  }
  const router = useRouter();
  useEffect(()=> {
    if(data && data.reset) {
      //console.log('effect')
      router.push('/')
    }
}, [data])
  
  return (
      <button disabled={loading} className="button" onClick={reset}>
        Start Again
      </button>
    
  );
};

export default ResultReset;

