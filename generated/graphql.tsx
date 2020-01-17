import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateCriteriaInput = {
  name: Scalars['String'],
  score: Scalars['Int'],
};

export type CreateIssue = {
  issue: Scalars['String'],
};

export type CreateTaskInput = {
  title: Scalars['String'],
};

export type Criteria = {
   __typename?: 'Criteria',
  id: Scalars['Int'],
  name: Scalars['String'],
  score: Scalars['Int'],
};

export type Issue = {
   __typename?: 'Issue',
  id: Scalars['Int'],
  issue: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTask?: Maybe<Task>,
  updateTask?: Maybe<Task>,
  changeStatus?: Maybe<Task>,
  deleteTask?: Maybe<Task>,
  createIssue?: Maybe<Issue>,
  updateIssue?: Maybe<Issue>,
  createCriteria?: Maybe<Criteria>,
  updateCriteria?: Maybe<Criteria>,
  deleteCriteria?: Maybe<Criteria>,
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int'],
  status: TaskStatus
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']
};


export type MutationCreateIssueArgs = {
  input: CreateIssue
};


export type MutationUpdateIssueArgs = {
  input: UpdateIssue
};


export type MutationCreateCriteriaArgs = {
  input: CreateCriteriaInput
};


export type MutationUpdateCriteriaArgs = {
  input: UpdateCriteriaInput
};


export type MutationDeleteCriteriaArgs = {
  id: Scalars['Int']
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  task?: Maybe<Task>,
  issue?: Maybe<Issue>,
  criteria?: Maybe<Criteria>,
  criterias: Array<Criteria>,
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>
};


export type QueryTaskArgs = {
  id: Scalars['Int']
};


export type QueryIssueArgs = {
  id: Scalars['Int']
};


export type QueryCriteriaArgs = {
  id: Scalars['Int']
};

export type Task = {
   __typename?: 'Task',
  id: Scalars['Int'],
  title: Scalars['String'],
  status: TaskStatus,
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type UpdateCriteriaInput = {
  id: Scalars['Int'],
  name: Scalars['String'],
  score: Scalars['Int'],
};

export type UpdateIssue = {
  id: Scalars['Int'],
  issue?: Maybe<Scalars['String']>,
};

export type UpdateTaskInput = {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  status?: Maybe<TaskStatus>,
};


export type CreateCriteriaMutationVariables = {
  input: CreateCriteriaInput
};


export type CreateCriteriaMutation = (
  { __typename?: 'Mutation' }
  & { createCriteria: Maybe<(
    { __typename?: 'Criteria' }
    & Pick<Criteria, 'id' | 'name' | 'score'>
  )> }
);

export type CreateIssueMutationVariables = {
  input: CreateIssue
};


export type CreateIssueMutation = (
  { __typename?: 'Mutation' }
  & { createIssue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )> }
);

export type CreateTaskMutationVariables = {
  input: CreateTaskInput
};


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type CriteriaQueryVariables = {
  id: Scalars['Int']
};


export type CriteriaQuery = (
  { __typename?: 'Query' }
  & { criteria: Maybe<(
    { __typename?: 'Criteria' }
    & Pick<Criteria, 'id' | 'name' | 'score'>
  )> }
);

export type CriteriasQueryVariables = {};


export type CriteriasQuery = (
  { __typename?: 'Query' }
  & { criterias: Array<(
    { __typename?: 'Criteria' }
    & Pick<Criteria, 'id' | 'name' | 'score'>
  )> }
);

export type DeleteCriteriaMutationVariables = {
  id: Scalars['Int']
};


export type DeleteCriteriaMutation = (
  { __typename?: 'Mutation' }
  & { deleteCriteria: Maybe<(
    { __typename?: 'Criteria' }
    & Pick<Criteria, 'id' | 'name' | 'score'>
  )> }
);

export type DeleteTaskMutationVariables = {
  id: Scalars['Int']
};


export type DeleteTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type IssueQueryVariables = {
  id: Scalars['Int']
};


export type IssueQuery = (
  { __typename?: 'Query' }
  & { issue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )> }
);

export type TaskQueryVariables = {
  id: Scalars['Int']
};


export type TaskQuery = (
  { __typename?: 'Query' }
  & { task: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>
};


export type TasksQuery = (
  { __typename?: 'Query' }
  & { tasks: Array<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);

export type UpdateCriteriaMutationVariables = {
  input: UpdateCriteriaInput
};


export type UpdateCriteriaMutation = (
  { __typename?: 'Mutation' }
  & { updateCriteria: Maybe<(
    { __typename?: 'Criteria' }
    & Pick<Criteria, 'id' | 'name' | 'score'>
  )> }
);

export type UpdateIssueMutationVariables = {
  input: UpdateIssue
};


export type UpdateIssueMutation = (
  { __typename?: 'Mutation' }
  & { updateIssue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )> }
);

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput
};


export type UpdateTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateTask: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'status'>
  )> }
);


export const CreateCriteriaDocument = gql`
    mutation CreateCriteria($input: CreateCriteriaInput!) {
  createCriteria(input: $input) {
    id
    name
    score
  }
}
    `;
export type CreateCriteriaMutationFn = ApolloReactCommon.MutationFunction<CreateCriteriaMutation, CreateCriteriaMutationVariables>;

/**
 * __useCreateCriteriaMutation__
 *
 * To run a mutation, you first call `useCreateCriteriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCriteriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCriteriaMutation, { data, loading, error }] = useCreateCriteriaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCriteriaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCriteriaMutation, CreateCriteriaMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCriteriaMutation, CreateCriteriaMutationVariables>(CreateCriteriaDocument, baseOptions);
      }
export type CreateCriteriaMutationHookResult = ReturnType<typeof useCreateCriteriaMutation>;
export type CreateCriteriaMutationResult = ApolloReactCommon.MutationResult<CreateCriteriaMutation>;
export type CreateCriteriaMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCriteriaMutation, CreateCriteriaMutationVariables>;
export const CreateIssueDocument = gql`
    mutation CreateIssue($input: CreateIssue!) {
  createIssue(input: $input) {
    id
    issue
  }
}
    `;
export type CreateIssueMutationFn = ApolloReactCommon.MutationFunction<CreateIssueMutation, CreateIssueMutationVariables>;

/**
 * __useCreateIssueMutation__
 *
 * To run a mutation, you first call `useCreateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIssueMutation, { data, loading, error }] = useCreateIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIssueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateIssueMutation, CreateIssueMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateIssueMutation, CreateIssueMutationVariables>(CreateIssueDocument, baseOptions);
      }
export type CreateIssueMutationHookResult = ReturnType<typeof useCreateIssueMutation>;
export type CreateIssueMutationResult = ApolloReactCommon.MutationResult<CreateIssueMutation>;
export type CreateIssueMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateIssueMutation, CreateIssueMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    status
  }
}
    `;
export type CreateTaskMutationFn = ApolloReactCommon.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, baseOptions);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = ApolloReactCommon.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const CriteriaDocument = gql`
    query Criteria($id: Int!) {
  criteria(id: $id) {
    id
    name
    score
  }
}
    `;

/**
 * __useCriteriaQuery__
 *
 * To run a query within a React component, call `useCriteriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCriteriaQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCriteriaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCriteriaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CriteriaQuery, CriteriaQueryVariables>) {
        return ApolloReactHooks.useQuery<CriteriaQuery, CriteriaQueryVariables>(CriteriaDocument, baseOptions);
      }
export function useCriteriaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CriteriaQuery, CriteriaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CriteriaQuery, CriteriaQueryVariables>(CriteriaDocument, baseOptions);
        }
export type CriteriaQueryHookResult = ReturnType<typeof useCriteriaQuery>;
export type CriteriaLazyQueryHookResult = ReturnType<typeof useCriteriaLazyQuery>;
export type CriteriaQueryResult = ApolloReactCommon.QueryResult<CriteriaQuery, CriteriaQueryVariables>;
export const CriteriasDocument = gql`
    query Criterias {
  criterias {
    id
    name
    score
  }
}
    `;

/**
 * __useCriteriasQuery__
 *
 * To run a query within a React component, call `useCriteriasQuery` and pass it any options that fit your needs.
 * When your component renders, `useCriteriasQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCriteriasQuery({
 *   variables: {
 *   },
 * });
 */
export function useCriteriasQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CriteriasQuery, CriteriasQueryVariables>) {
        return ApolloReactHooks.useQuery<CriteriasQuery, CriteriasQueryVariables>(CriteriasDocument, baseOptions);
      }
export function useCriteriasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CriteriasQuery, CriteriasQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CriteriasQuery, CriteriasQueryVariables>(CriteriasDocument, baseOptions);
        }
export type CriteriasQueryHookResult = ReturnType<typeof useCriteriasQuery>;
export type CriteriasLazyQueryHookResult = ReturnType<typeof useCriteriasLazyQuery>;
export type CriteriasQueryResult = ApolloReactCommon.QueryResult<CriteriasQuery, CriteriasQueryVariables>;
export const DeleteCriteriaDocument = gql`
    mutation DeleteCriteria($id: Int!) {
  deleteCriteria(id: $id) {
    id
    name
    score
  }
}
    `;
export type DeleteCriteriaMutationFn = ApolloReactCommon.MutationFunction<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>;

/**
 * __useDeleteCriteriaMutation__
 *
 * To run a mutation, you first call `useDeleteCriteriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCriteriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCriteriaMutation, { data, loading, error }] = useDeleteCriteriaMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCriteriaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>(DeleteCriteriaDocument, baseOptions);
      }
export type DeleteCriteriaMutationHookResult = ReturnType<typeof useDeleteCriteriaMutation>;
export type DeleteCriteriaMutationResult = ApolloReactCommon.MutationResult<DeleteCriteriaMutation>;
export type DeleteCriteriaMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCriteriaMutation, DeleteCriteriaMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: Int!) {
  deleteTask(id: $id) {
    id
    title
    status
  }
}
    `;
export type DeleteTaskMutationFn = ApolloReactCommon.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, baseOptions);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = ApolloReactCommon.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const IssueDocument = gql`
    query Issue($id: Int!) {
  issue(id: $id) {
    id
    issue
  }
}
    `;

/**
 * __useIssueQuery__
 *
 * To run a query within a React component, call `useIssueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIssueQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIssueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useIssueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IssueQuery, IssueQueryVariables>) {
        return ApolloReactHooks.useQuery<IssueQuery, IssueQueryVariables>(IssueDocument, baseOptions);
      }
export function useIssueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IssueQuery, IssueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IssueQuery, IssueQueryVariables>(IssueDocument, baseOptions);
        }
export type IssueQueryHookResult = ReturnType<typeof useIssueQuery>;
export type IssueLazyQueryHookResult = ReturnType<typeof useIssueLazyQuery>;
export type IssueQueryResult = ApolloReactCommon.QueryResult<IssueQuery, IssueQueryVariables>;
export const TaskDocument = gql`
    query Task($id: Int!) {
  task(id: $id) {
    id
    title
    status
  }
}
    `;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTaskQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TaskQuery, TaskQueryVariables>) {
        return ApolloReactHooks.useQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
      }
export function useTaskLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TaskQuery, TaskQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TaskQuery, TaskQueryVariables>(TaskDocument, baseOptions);
        }
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = ApolloReactCommon.QueryResult<TaskQuery, TaskQueryVariables>;
export const TasksDocument = gql`
    query Tasks($status: TaskStatus) {
  tasks(status: $status) {
    id
    title
    status
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        return ApolloReactHooks.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions);
      }
export function useTasksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, baseOptions);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = ApolloReactCommon.QueryResult<TasksQuery, TasksQueryVariables>;
export const UpdateCriteriaDocument = gql`
    mutation UpdateCriteria($input: UpdateCriteriaInput!) {
  updateCriteria(input: $input) {
    id
    name
    score
  }
}
    `;
export type UpdateCriteriaMutationFn = ApolloReactCommon.MutationFunction<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>;

/**
 * __useUpdateCriteriaMutation__
 *
 * To run a mutation, you first call `useUpdateCriteriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCriteriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCriteriaMutation, { data, loading, error }] = useUpdateCriteriaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCriteriaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>(UpdateCriteriaDocument, baseOptions);
      }
export type UpdateCriteriaMutationHookResult = ReturnType<typeof useUpdateCriteriaMutation>;
export type UpdateCriteriaMutationResult = ApolloReactCommon.MutationResult<UpdateCriteriaMutation>;
export type UpdateCriteriaMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCriteriaMutation, UpdateCriteriaMutationVariables>;
export const UpdateIssueDocument = gql`
    mutation UpdateIssue($input: UpdateIssue!) {
  updateIssue(input: $input) {
    id
    issue
  }
}
    `;
export type UpdateIssueMutationFn = ApolloReactCommon.MutationFunction<UpdateIssueMutation, UpdateIssueMutationVariables>;

/**
 * __useUpdateIssueMutation__
 *
 * To run a mutation, you first call `useUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueMutation, { data, loading, error }] = useUpdateIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIssueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateIssueMutation, UpdateIssueMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateIssueMutation, UpdateIssueMutationVariables>(UpdateIssueDocument, baseOptions);
      }
export type UpdateIssueMutationHookResult = ReturnType<typeof useUpdateIssueMutation>;
export type UpdateIssueMutationResult = ApolloReactCommon.MutationResult<UpdateIssueMutation>;
export type UpdateIssueMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateIssueMutation, UpdateIssueMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    status
  }
}
    `;
export type UpdateTaskMutationFn = ApolloReactCommon.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, baseOptions);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = ApolloReactCommon.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;