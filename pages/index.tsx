import React, {useEffect} from 'react';
import { NextPage } from 'next';
import { withApollo } from '../lib/apollo';
import Dashboard from '../components/Dashboard';
import Cookie from 'js-cookie';
import { COOKIES } from "../services/cookie";
interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  //localStorage.removeItem('issueId')
  Cookie.remove(COOKIES.user)
  Cookie.remove(COOKIES.name)
  return (
      <Dashboard />
  );
};

const IndexPageWithApollo = withApollo(IndexPage);

export default IndexPageWithApollo;