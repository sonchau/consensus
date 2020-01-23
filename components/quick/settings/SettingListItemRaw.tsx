import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Select from '../../common/Select';

import {
  Setting  
} from '../../../generated/graphql';

interface Props {
  setting: Setting;

}

const SettingListItemRaw: React.FC<Props> = ({ setting }) => {

  return (
    <li className="task-list-item" key={setting.id}>
        <span className="task-list-item-title">{setting.criteria}</span> 
        <span className="task-list-item-delete">{setting.score}</span>
    </li>
    
  );
};

export default SettingListItemRaw;
