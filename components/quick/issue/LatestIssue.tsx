import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { useIssuesQuery } from '../../../generated/graphql';

const LastestIssue = () => {
    const {loading, error, data} = useIssuesQuery({
        // refetch after 500ms to get updated data
        pollInterval: 500, 
    }) 
    if (loading) {
        return <p>Loading...</p>;
      } else if (error) {
        return <p>An error occurred.</p>;
      }
    const lastestIssue = data?.issues[data.issues.length - 1]
    return (
        <h2>Your issue: {lastestIssue?.issue}</h2>
    )
}

export default LastestIssue