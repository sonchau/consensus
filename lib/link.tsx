//v3 has some issue
//import { WebSocketLink } from "@apollo/link-ws";
//import { SubscriptionClient } from "subscriptions-transport-ws";

// use v2 for now
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';

interface Definintion {
    kind: string;
    operation?: string;
  };
  
  const wsLink = process.browser ? new WebSocketLink({
    uri: `wss://consensus-graphql.herokuapp.com/graphql`,
    options: {
      reconnect: true,
    },
  }) as any : null;
  
  const httpLink = new HttpLink({
    uri: 'https://consensus-graphql.herokuapp.com/graphql', // Server URL (must be absolute)
    //uri: 'http://localhost:3001/graphql',
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch,
  }) as any
  
export const link = process.browser ? split( //only create the split in the browser
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: Definintion = getMainDefinition(query);
      //console.log('getMainDefinition(query)', getMainDefinition(query))
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
  ) : httpLink;
  