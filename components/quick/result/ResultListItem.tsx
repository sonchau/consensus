import React, { useState, useEffect } from 'react';
import {useUpdateSettingMutation} from '../../../generated/graphql';
import Select from '../../common/Select';
interface Props {
  items: string[];
}

const tableData = {
  'padding': '1.5rem 5rem',
  'borderLeft': '1px solid #e2e8f0',
  'borderBottom': '1px solid #e2e8f0'
}

const ResultListItem: React.FC<Props> = ({ items }) => {
  //console.log('items', items)

  return (
    <tr>
    {
      items.map((item: any, index) => {
        let tmp
        {Object.keys(item).forEach(key => {
        //console.log('main key', key, 'value', item[key])
          if(key === 'score') {
            //{console.log('if key', key, 'value', item, 'item[key]', item[key].multiplyScore)}
    
            tmp =  <span>{item[key].multiplyScore}</span>
          
          } else if (key === 'criteria') {
            //console.log('else key', key, 'value', item[key].criteria)
            tmp =  <span>{item[key].criteria}</span>
          } else {
              tmp = <span>{item[key]}</span>
          }
        })}
        return <td style={tableData}> {tmp} </td>
      })
    }
    </tr>
  );
};

export default ResultListItem;

