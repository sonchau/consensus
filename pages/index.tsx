import React, {useEffect} from 'react';
import { NextPage } from 'next';
import { withApollo } from '../lib/apollo';
import Dashboard from '../components/Dashboard';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  //localStorage.removeItem('issue')
  return (
      <Dashboard />
  );
};

const IndexPageWithApollo = withApollo(IndexPage);

export default IndexPageWithApollo;