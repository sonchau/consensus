import React from 'react';
import {Setting, useSettingByTaskNameQuery, Criteria, useCriteriaQuery} from '../../../generated/graphql'
import { useCriteriasQuery } from '../../../generated/graphql';
import ResultListItem from './ResultListItem'
import {makeResult} from '../../../utils/common'

interface Props {
  settings: Setting[]
}

const tableGrid = {
  'borderTop': '1px solid #e2e8f0',
  'borderRight': '1px solid #e2e8f0',
  'margin': '3rem auto',
  'text-align': 'center'
}

const ResultList: React.FC<Props> = ({settings}) => {
  //console.log('settings', settings)
  let results
  const {loading, error, data, refetch} = useCriteriasQuery({
  })
  const criterias = data?.criterias
  if (criterias && criterias.length) {
    results = makeResult(settings, criterias)
  }
  //console.log('results', results)

  return (
    <>
        <h4> Details</h4>
        < hr />
        <p>Here is a breakdown of your scores for each solution and objective.</p>
        < hr />
        { (results && results.length) ? (
          <table style={tableGrid}>
          <tbody>
            {
              results.map((result: [], index: number) => {
                //console.log('result', result)
                return <ResultListItem items={result} key={index}/>
              })
            }
          </tbody>
        </table>
        ): (
          <p className="no-tasks-message"> No settings</p>
        )} 
          
    </>
  );
};

export default ResultList;
