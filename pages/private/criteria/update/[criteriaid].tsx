import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { withApollo } from '../../../../lib/apollo';
import { useCriteriaQuery } from '../../../../generated/graphql';
import UpdateCriteriaForm from '../../../../components/private/criteria/UpdateCriteriaForm'

const UpdateCriteriaPage: NextPage = () => {
  const router = useRouter();
  const id = typeof router.query.criteriaid === 'string' ? parseInt(router.query.criteriaid, 10) : NaN;
  const { loading, error, data } = useCriteriaQuery({
    variables: { id }
  });
  const criteria = data?.criteria;
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred.</p>
      ) : criteria ? (
        <UpdateCriteriaForm initialValues={{id: criteria.id, name: criteria.name, score: criteria.score}} />
      ) : (
        <p>Criteria not found.</p>
      )}
    </>
  );
};

export default withApollo(UpdateCriteriaPage);
