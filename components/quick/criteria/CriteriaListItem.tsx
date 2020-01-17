import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Criteria,
  useDeleteCriteriaMutation,
  CriteriasQuery,
  CriteriasQueryVariables,
  CriteriasDocument,
  
} from '../../../generated/graphql';

interface Props {
  criteria: Criteria;
}

const name = {
  color: '#4a5568'
}
const score = {
  color: '#4a5568'
}

const deleteButton = {
  'color': '#4a5568',
  'fontSize': '1rem',
  'margin': '0 0 0 auto',
  'padding': '0 0.5rem'
}

const criteriaItem = {
  display: 'grid',
  'gridTemplateColumns': '90% 1rem 1fr',
  'borderBottom': '1px solid #e2e8f0',
  'padding': '1rem',

  // css pseudo class does not seem working with jss, properly switch back to gloabal css
  // '&:nth-child(odd)': {
  //   background: 'red'
  // },

  // '&:last-child': {
  //   'borderBottom': 0
  // }

}
// .task-list-item-delete:hover {
//   color: var(--text-color);
// }


// .task-list-item {
//   align-items: center;
//   border-bottom: 1px solid var(--border-color);
//   display: flex;
//   padding: 1rem;
// }

// .task-list-item:nth-child(odd) {
//   background: var(--bg-highlight);
// }

// .task-list-item:last-child {
//   border-bottom: 0;
//   border-radius: 0 0 var(--default-radius) var(--default-radius);
// }

const CriteriaListItem: React.FC<Props> = ({ criteria }) => {
console.log('criteria', criteria)
  return (
    <li style={criteriaItem} key={criteria.id}>
      <Link href="/quick/criteria/update/[criteriaid]" as={`/quick/criteria/update/${criteria.id}`}>
        <a>
          <span style={name}>{criteria.name}</span> 
        </a>
      </Link>
      <Link href="/quick/criteria/update/[criteriaid]" as={`/quick/criteria/update/${criteria.id}`}>
        <a>
          <span style={score}>{criteria.score}</span>
        </a>
      </Link>
      <button style={deleteButton}>
        &times;
      </button>
    </li>
  );
};

export default CriteriaListItem;
