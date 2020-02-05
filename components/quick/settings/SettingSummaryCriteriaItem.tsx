import React, { useState, useEffect } from 'react';
import {useCriteriaQuery} from '../../../generated/graphql';

interface Props {
  criteriaId: number;
}



const SettingSummaryCriteriaItem: React.FC<Props> = ({ criteriaId }) => {
  const { data, loading, error } = useCriteriaQuery({
      variables: {
         id: criteriaId
      },
    });
  
  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>An error occurred in SettingSummaryCriteriaItem</p>;
  }
  //console.log('data', data)
  const criteria = data?.criteria

  return (
<span>{criteria?.name}<strong> (weighting={criteria?.score})</strong></span>
  );
};

export default SettingSummaryCriteriaItem;
