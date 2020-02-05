import React from 'react';
import {Setting, useSettingByTaskNameQuery, Criteria} from '../../../generated/graphql'
import SettingSummaryItem from './SettingSummaryItem'
import {makeSummary} from '../../../utils/common'

interface Props {
  settings: Setting[]
}

const tableGrid = {
  'borderTop': '1px solid #e2e8f0',
  'borderRight': '1px solid #e2e8f0',
  'margin': '0 auto',
  'text-align': 'center'
}

const SettingSummaryList: React.FC<Props> = ({settings}) => {
  const summaries = makeSummary(settings)
  //console.log(summaries)
  return (
    <>
        <h5> Your selection</h5>
        {settings && settings.length ? (
          <table style={tableGrid}>
            <tbody>
            { 
               summaries.map((summary: [], index: number) => {
                //console.log('summary', summary)
                 return <SettingSummaryItem items={summary} key={index}/>
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

export default SettingSummaryList;
