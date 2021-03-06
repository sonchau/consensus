import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Criteria,
  useDeleteCriteriaMutation,
  CriteriasByIssueIdQuery,
  CriteriasByIssueIdQueryVariables,
  CriteriasByIssueIdDocument,
  
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
}

const CriteriaListItem: React.FC<Props> = ({ criteria }) => {
  const [deleteCriteria, { loading, error }] = useDeleteCriteriaMutation({
    update: (cache, result) => {
      const data = cache.readQuery<CriteriasByIssueIdQuery, CriteriasByIssueIdQueryVariables>({
        query: CriteriasByIssueIdDocument,
        variables: {
            issueId: criteria!.issue!.id
        }
      });
      if (data) {
        const filter = data.criteriasByIssueId.filter(
                 ({ id }) => id !== result.data?.deleteCriteria?.id
          )
        //console.log('filter', filter)
        cache.writeQuery<CriteriasByIssueIdQuery, CriteriasByIssueIdQueryVariables>({
          query: CriteriasByIssueIdDocument,
          variables: {
            issueId: criteria!.issue!.id
          },
          data: {
            criteriasByIssueId: filter
          }
        });
      }
    }
  });
  const handleDeleteClick = () => {
    deleteCriteria({ variables: { id: criteria.id } });
  };

  useEffect(() => {
    if (error) {
      alert('An error occurred.');
    }
  }, [error]);
  return (
    <li style={criteriaItem} key={criteria.id}>
      <Link href="/private/criteria/update/[criteriaid]" as={`/private/criteria/update/${criteria.id}`}>
        <a>
          <span style={name}>{criteria.name}</span> 
        </a>
      </Link>
      <span>&nbsp;</span>
      <button 
        disabled={loading}
        onClick={handleDeleteClick}
        style={deleteButton}>
        &times;
      </button>
    </li>
  );
};

export default CriteriaListItem;
