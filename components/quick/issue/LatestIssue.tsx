import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { useIssueQuery } from '../../../generated/graphql';

const center = {
    'margin': '1rem auto',
    'text-align': 'center'
}
const LastestIssue = () => {
    const currentIssue = JSON.parse(localStorage.getItem('issueId') || '{}')
    const {loading, error, data} = useIssueQuery({
        variables: {
            id: currentIssue
        },
    }) 
    if (loading) {
        return <p>Loading...</p>;
      } else if (error) {
        return <p>An error occurred.</p>;
      }
      //console.log('data lastest issue', data)
    return (
        <h2 style={center}>{data!.issue!.issue}</h2>
    )
}

export default LastestIssue
