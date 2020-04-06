import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { useIssueQuery, useChangeIssueSubscription } from '../../../generated/graphql';

const center = {
    'margin': '1rem auto',
    'text-align': 'center'
}
interface Props {
    isPrint?: boolean
}
const LastestIssue: React.FC<Props> = ({isPrint}) => {
    const change = useChangeIssueSubscription()

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
        isPrint? 
            <p style={center}>{data!.issue!.issue}</p> : 
            <h2 style={center}>{data!.issue!.issue}</h2>
    )
}

export default LastestIssue
