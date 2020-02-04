import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Select from '../../common/Select';

import {
  Criteria,
  useDeleteCriteriaMutation,
  CriteriasQuery,
  CriteriasQueryVariables,
  CriteriasDocument,
  Setting
  
} from '../../../generated/graphql';

interface Item {
  criteria: string
  score?: number
}

interface Props {
  criteria: Criteria;
  //TODO: fix this any type here
  onSettingItemCreated: (item: any) => void
}

const SettingsListItem: React.FC<Props> = ({ criteria, onSettingItemCreated }) => {
  const [settingItem, setSettingItem] = useState({
    'criteria': criteria.name,
  })
  const handleScoreChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const item: Item = {
      ...settingItem, 
      [e.currentTarget.name]: e.currentTarget.value
    }
    setSettingItem(item)
    onSettingItemCreated(item)
    
  }
  return (
    <li className="task-list-item" key={criteria.id}>
        <span className="task-list-item-title">{criteria.name}</span> 
        <input type="hidden" value={criteria.id} name="criteriaId"/>
        <Select name="score" className="task-list-item-delete"
        onChange={handleScoreChange} 
        values={['1','2','3','4','5','6','7','8','9','10']} />
    </li>
    
  );
};

export default SettingsListItem;
