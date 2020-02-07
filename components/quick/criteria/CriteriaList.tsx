import React from 'react';
import {Criteria} from '../../../generated/graphql'
import CriteriaListItem from './CriteriaListItem'

interface Props {
    criterias: Criteria[]
}
const CriteriaList: React.FC<Props> = ({criterias}) => {
  return (
    <ul>
        <li className="task-list-heading">
            <span> Your objective</span>
            <span className="last"> Weighting</span>
        </li>
    {criterias.map(criteria => {
      return <CriteriaListItem key={criteria.id} criteria = {criteria} />
    })}
  </ul>
  );
};

export default CriteriaList;

