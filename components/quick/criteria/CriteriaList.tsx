import React from 'react';
import {Criteria} from '../../../generated/graphql'
import CriteriaListItem from './CriteriaListItem'

interface Props {
    criterias: Criteria[]
}
const CriteriaList: React.FC<Props> = ({criterias}) => {
  return (
    <ul>
    {criterias.map(criteria => {
      return <CriteriaListItem key={criteria.id} criteria = {criteria} />
    })}
  </ul>
  );
};

export default CriteriaList;

