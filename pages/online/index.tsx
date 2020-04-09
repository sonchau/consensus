import React, {useEffect} from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../lib/apollo';
import { useIssueQuery } from '../../generated/graphql';
import CreateIssueForm from '../../components/quick/issue/CreateIssueForm';
import Drawer from '../../components/common/Drawer';
import DrawerContent from '../../components/quick/issue/DrawerContent';
import { useRouter } from 'next/router';
import Router from 'next/router'
import {COOKIES} from '../../services/cookie';
import Cookie from 'js-cookie';

interface InitialProps {
  // ssr: boolean;
  // isAuthenticated: boolean;
}

interface Props extends InitialProps {}

const OnlinePage: NextPage<Props, InitialProps> = () => {
//const OnlinePage: NextPage<Props, InitialProps> = ({ssr, isAuthenticated}) => {
  
  const cookie = Cookie.getJSON(COOKIES.name)
  const isAuthenticatedCookie = cookie ? cookie['authenticated'] : null
  const router = useRouter()
 

  // if(!isAuthenticatedCookie) {
  //   const router = useRouter()
  //   console.log('router 111', router)
  //   router.push('/')
  // }
  // const { loading, error, data } = useIssueQuery({
  //   variables: { id: 0 }
  // });
  // if (loading) {
  //   return <p>Loading...</p>;
  // } else if (error) {
  //   return <p>An error occurred.</p>;
  // }


    useEffect(()=> {
      console.log( 'effect isAuthenticatedCookie', isAuthenticatedCookie)
      if (!isAuthenticatedCookie) {
        router.push('/')
      }
  }, [isAuthenticatedCookie])

  return (
    <>
      <p>Online page 111</p>
    </>
  );
};



// OnlinePage.getInitialProps = async ctx => {

//   console.log('getInitialProps ctx', ctx, 'cookie', Cookie.get(COOKIES.name))
//   console.log('here 111')

//   return {
//     ssr: !!ctx.req, 
//     isAuthenticated: true
//   };
// };

const OnlinePageWithApollo = withApollo(OnlinePage);

export default OnlinePageWithApollo;
