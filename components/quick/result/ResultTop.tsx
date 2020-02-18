import React from 'react';
import {makeResult, makeHorizontalChartData, getTopTaskHeading, TopHeading} from '../../../utils/common'
import { Setting, useCriteriasQuery } from '../../../generated/graphql';

interface Props {
  settings: Setting[]
}

const ResultTop: React.FC<Props> = ({ settings }) => {
  let results, horizontalChartData, topTaskHeading: TopHeading = { task: '', score: 0}
  const {loading, error, data, refetch} = useCriteriasQuery({
  })
  const criterias = data?.criterias
  if (criterias && criterias.length) {
    results = makeResult(settings, criterias)
    horizontalChartData = makeHorizontalChartData(results)
    topTaskHeading = getTopTaskHeading(horizontalChartData)
    //console.log('topTaskHeading', topTaskHeading)
  }

  
  return (
    (topTaskHeading && topTaskHeading.task) ? (
      <p>Base on your evaluation, the highest scoring option is  
      <span className="red"> {topTaskHeading.task} </span></p>
    ) : (
      <p> No task</p>
    )
    
  );
};

export default ResultTop;

