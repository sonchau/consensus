import React, { useState, useEffect } from 'react';
import {useUpdateSettingMutation} from '../../../generated/graphql';
import SettingSummaryCriteriaItem from './SettingSummaryCriteriaItem';
import Select from '../../common/Select';
interface Props {
  items: string[];
}

const tableData = {
  'padding': '1.5rem 5rem',
  'borderLeft': '1px solid #e2e8f0',
  'borderBottom': '1px solid #e2e8f0'
}

const SettingSummaryItem: React.FC<Props> = ({ items }) => {
  const [updateSettingMutation, { data, loading, error }] = useUpdateSettingMutation();

  const handleScoreItemChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    const {id} = e.currentTarget.dataset
    const inputId = typeof id === 'string' ? parseInt(id, 10) : 1;
    const score = typeof value === 'string' ? parseInt(value, 10) : 1;
    //console.log('handleScoreItemChange', id, 'name', name, 'value', value, 'id', inputId)

    updateSettingMutation( {
      variables: {
        input: {
          'id': inputId,
          score
        }
      }
    })
    
  }
  return (
    <tr>
        {
          items.map((item: any, index) => {
            let tmp
            {Object.keys(item).forEach(key => {
              //console.log('main key', key, 'value', item[key])
              if(key === 'score') {
                //{console.log('if key', key, 'value', item, 'item[key]', item[key].score)}

                tmp = <Select name="score" className="task-list-item-delete"
                  onChange={handleScoreItemChange}
                  defaultValue= {item[key].score}
                  values={['1','2','3','4','5','6','7','8','9','10']} 
                  dataId={item[key].id}
                  /> 
              } else if (key === 'criteria') {
                //console.log('else key', key, 'value', item[key])
                tmp = <SettingSummaryCriteriaItem criteriaId={item[key].criteriaId}/>
              } else {
                tmp = <span>{item[key]}</span>
               
              }

            })}
            return <td style={tableData}>
              {tmp}
              </td>
          })
        }
    </tr>
  );
};

export default SettingSummaryItem;
