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

export type CreateIssueInput = {
  issue: Scalars['String'],
};

export type CreateNoteInput = {
  note: Scalars['String'],
};

export type CreateSettingInput = {
  task: Scalars['String'],
  criteria: Scalars['String'],
  score: Scalars['Int'],
  taskId: Scalars['Int'],
  criteriaId: Scalars['Int'],
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
  clearTasks?: Maybe<Scalars['Boolean']>,
  createIssue?: Maybe<Issue>,
  updateIssue?: Maybe<Issue>,
  deleteIssue?: Maybe<Issue>,
  clearIssues?: Maybe<Scalars['Boolean']>,
  createNote?: Maybe<Note>,
  updateNote?: Maybe<Note>,
  deleteNote?: Maybe<Note>,
  clearNotes?: Maybe<Scalars['Boolean']>,
  createCriteria?: Maybe<Criteria>,
  updateCriteria?: Maybe<Criteria>,
  deleteCriteria?: Maybe<Criteria>,
  clearCriterias?: Maybe<Scalars['Boolean']>,
  createSetting?: Maybe<Setting>,
  updateSetting?: Maybe<Setting>,
  deleteSetting?: Maybe<Setting>,
  clearSettings?: Maybe<Scalars['Boolean']>,
  reset?: Maybe<Scalars['Boolean']>,
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
  input: CreateIssueInput
};


export type MutationUpdateIssueArgs = {
  input: UpdateIssueInput
};


export type MutationDeleteIssueArgs = {
  id: Scalars['Int']
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput
};


export type MutationDeleteNoteArgs = {
  id: Scalars['Int']
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


export type MutationCreateSettingArgs = {
  input: CreateSettingInput
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput
};


export type MutationDeleteSettingArgs = {
  id: Scalars['Int']
};

export type Note = {
   __typename?: 'Note',
  id: Scalars['Int'],
  note: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  hello?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  task?: Maybe<Task>,
  taskTitle?: Maybe<Task>,
  issue?: Maybe<Issue>,
  issues: Array<Maybe<Issue>>,
  note?: Maybe<Note>,
  notes: Array<Maybe<Note>>,
  criteria?: Maybe<Criteria>,
  criterias: Array<Criteria>,
  setting?: Maybe<Setting>,
  settingByTaskName: Array<Setting>,
  settings: Array<Setting>,
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>
};


export type QueryTaskArgs = {
  id: Scalars['Int']
};


export type QueryTaskTitleArgs = {
  title: Scalars['String']
};


export type QueryIssueArgs = {
  id: Scalars['Int']
};


export type QueryNoteArgs = {
  id?: Maybe<Scalars['Int']>
};


export type QueryCriteriaArgs = {
  id: Scalars['Int']
};


export type QuerySettingArgs = {
  id: Scalars['Int']
};


export type QuerySettingByTaskNameArgs = {
  task: Scalars['String']
};

export type Setting = {
   __typename?: 'Setting',
  id: Scalars['Int'],
  task: Scalars['String'],
  criteria: Scalars['String'],
  score: Scalars['Int'],
  taskId: Scalars['Int'],
  criteriaId: Scalars['Int'],
};

export type Subscription = {
   __typename?: 'Subscription',
  changeIssue?: Maybe<Issue>,
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

export type UpdateIssueInput = {
  id: Scalars['Int'],
  issue?: Maybe<Scalars['String']>,
};

export type UpdateNoteInput = {
  id: Scalars['Int'],
  note?: Maybe<Scalars['String']>,
};

export type UpdateSettingInput = {
  id: Scalars['Int'],
  task?: Maybe<Scalars['String']>,
  criteria?: Maybe<Scalars['String']>,
  score: Scalars['Int'],
  taskId?: Maybe<Scalars['Int']>,
  criteriaId?: Maybe<Scalars['Int']>,
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
  input: CreateIssueInput
};


export type CreateIssueMutation = (
  { __typename?: 'Mutation' }
  & { createIssue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )> }
);

export type CreateSettingMutationVariables = {
  input: CreateSettingInput
};


export type CreateSettingMutation = (
  { __typename?: 'Mutation' }
  & { createSetting: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'task' | 'criteria' | 'score' | 'taskId' | 'criteriaId'>
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

export type DeleteIssueMutationVariables = {
  id: Scalars['Int']
};


export type DeleteIssueMutation = (
  { __typename?: 'Mutation' }
  & { deleteIssue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )> }
);

export type DeleteSettingMutationVariables = {
  id: Scalars['Int']
};


export type DeleteSettingMutation = (
  { __typename?: 'Mutation' }
  & { deleteSetting: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'task' | 'criteria' | 'score'>
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

export type IssuesQueryVariables = {};


export type IssuesQuery = (
  { __typename?: 'Query' }
  & { issues: Array<Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )>> }
);

export type NoteQueryVariables = {
  id: Scalars['Int']
};


export type NoteQuery = (
  { __typename?: 'Query' }
  & { note: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'note'>
  )> }
);

export type NotesQueryVariables = {};


export type NotesQuery = (
  { __typename?: 'Query' }
  & { notes: Array<Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'note'>
  )>> }
);

export type ResetMutationVariables = {};


export type ResetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'reset'>
);

export type SettingByTaskNameQueryVariables = {
  task: Scalars['String']
};


export type SettingByTaskNameQuery = (
  { __typename?: 'Query' }
  & { settingByTaskName: Array<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'task' | 'criteria' | 'score' | 'taskId' | 'criteriaId'>
  )> }
);

export type SettingQueryVariables = {
  id: Scalars['Int']
};


export type SettingQuery = (
  { __typename?: 'Query' }
  & { setting: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'task' | 'criteria' | 'score' | 'taskId' | 'criteriaId'>
  )> }
);

export type SettingsQueryVariables = {};


export type SettingsQuery = (
  { __typename?: 'Query' }
  & { settings: Array<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'task' | 'criteria' | 'score' | 'taskId' | 'criteriaId'>
  )> }
);

export type ChangeIssueSubscriptionVariables = {};


export type ChangeIssueSubscription = (
  { __typename?: 'Subscription' }
  & { changeIssue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'issue' | 'id'>
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

export type TaskTitleQueryVariables = {
  title: Scalars['String']
};


export type TaskTitleQuery = (
  { __typename?: 'Query' }
  & { taskTitle: Maybe<(
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
  input: UpdateIssueInput
};


export type UpdateIssueMutation = (
  { __typename?: 'Mutation' }
  & { updateIssue: Maybe<(
    { __typename?: 'Issue' }
    & Pick<Issue, 'id' | 'issue'>
  )> }
);

export type UpdateNoteMutationVariables = {
  input: UpdateNoteInput
};


export type UpdateNoteMutation = (
  { __typename?: 'Mutation' }
  & { updateNote: Maybe<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'note'>
  )> }
);

export type UpdateSettingMutationVariables = {
  input: UpdateSettingInput
};


export type UpdateSettingMutation = (
  { __typename?: 'Mutation' }
  & { updateSetting: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'task' | 'criteria' | 'score' | 'taskId' | 'criteriaId'>
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
    mutation CreateIssue($input: CreateIssueInput!) {
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
export const CreateSettingDocument = gql`
    mutation CreateSetting($input: CreateSettingInput!) {
  createSetting(input: $input) {
    id
    task
    criteria
    score
    taskId
    criteriaId
  }
}
    `;
export type CreateSettingMutationFn = ApolloReactCommon.MutationFunction<CreateSettingMutation, CreateSettingMutationVariables>;

/**
 * __useCreateSettingMutation__
 *
 * To run a mutation, you first call `useCreateSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSettingMutation, { data, loading, error }] = useCreateSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSettingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSettingMutation, CreateSettingMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSettingMutation, CreateSettingMutationVariables>(CreateSettingDocument, baseOptions);
      }
export type CreateSettingMutationHookResult = ReturnType<typeof useCreateSettingMutation>;
export type CreateSettingMutationResult = ApolloReactCommon.MutationResult<CreateSettingMutation>;
export type CreateSettingMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSettingMutation, CreateSettingMutationVariables>;
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
export const DeleteIssueDocument = gql`
    mutation DeleteIssue($id: Int!) {
  deleteIssue(id: $id) {
    id
    issue
  }
}
    `;
export type DeleteIssueMutationFn = ApolloReactCommon.MutationFunction<DeleteIssueMutation, DeleteIssueMutationVariables>;

/**
 * __useDeleteIssueMutation__
 *
 * To run a mutation, you first call `useDeleteIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIssueMutation, { data, loading, error }] = useDeleteIssueMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteIssueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteIssueMutation, DeleteIssueMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteIssueMutation, DeleteIssueMutationVariables>(DeleteIssueDocument, baseOptions);
      }
export type DeleteIssueMutationHookResult = ReturnType<typeof useDeleteIssueMutation>;
export type DeleteIssueMutationResult = ApolloReactCommon.MutationResult<DeleteIssueMutation>;
export type DeleteIssueMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteIssueMutation, DeleteIssueMutationVariables>;
export const DeleteSettingDocument = gql`
    mutation DeleteSetting($id: Int!) {
  deleteSetting(id: $id) {
    id
    task
    criteria
    score
  }
}
    `;
export type DeleteSettingMutationFn = ApolloReactCommon.MutationFunction<DeleteSettingMutation, DeleteSettingMutationVariables>;

/**
 * __useDeleteSettingMutation__
 *
 * To run a mutation, you first call `useDeleteSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSettingMutation, { data, loading, error }] = useDeleteSettingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSettingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSettingMutation, DeleteSettingMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteSettingMutation, DeleteSettingMutationVariables>(DeleteSettingDocument, baseOptions);
      }
export type DeleteSettingMutationHookResult = ReturnType<typeof useDeleteSettingMutation>;
export type DeleteSettingMutationResult = ApolloReactCommon.MutationResult<DeleteSettingMutation>;
export type DeleteSettingMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteSettingMutation, DeleteSettingMutationVariables>;
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
export const IssuesDocument = gql`
    query Issues {
  issues {
    id
    issue
  }
}
    `;

/**
 * __useIssuesQuery__
 *
 * To run a query within a React component, call `useIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIssuesQuery({
 *   variables: {
 *   },
 * });
 */
export function useIssuesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IssuesQuery, IssuesQueryVariables>) {
        return ApolloReactHooks.useQuery<IssuesQuery, IssuesQueryVariables>(IssuesDocument, baseOptions);
      }
export function useIssuesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IssuesQuery, IssuesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IssuesQuery, IssuesQueryVariables>(IssuesDocument, baseOptions);
        }
export type IssuesQueryHookResult = ReturnType<typeof useIssuesQuery>;
export type IssuesLazyQueryHookResult = ReturnType<typeof useIssuesLazyQuery>;
export type IssuesQueryResult = ApolloReactCommon.QueryResult<IssuesQuery, IssuesQueryVariables>;
export const NoteDocument = gql`
    query Note($id: Int!) {
  note(id: $id) {
    id
    note
  }
}
    `;

/**
 * __useNoteQuery__
 *
 * To run a query within a React component, call `useNoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useNoteQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNoteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNoteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NoteQuery, NoteQueryVariables>) {
        return ApolloReactHooks.useQuery<NoteQuery, NoteQueryVariables>(NoteDocument, baseOptions);
      }
export function useNoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NoteQuery, NoteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NoteQuery, NoteQueryVariables>(NoteDocument, baseOptions);
        }
export type NoteQueryHookResult = ReturnType<typeof useNoteQuery>;
export type NoteLazyQueryHookResult = ReturnType<typeof useNoteLazyQuery>;
export type NoteQueryResult = ApolloReactCommon.QueryResult<NoteQuery, NoteQueryVariables>;
export const NotesDocument = gql`
    query Notes {
  notes {
    id
    note
  }
}
    `;

/**
 * __useNotesQuery__
 *
 * To run a query within a React component, call `useNotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NotesQuery, NotesQueryVariables>) {
        return ApolloReactHooks.useQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
      }
export function useNotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NotesQuery, NotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NotesQuery, NotesQueryVariables>(NotesDocument, baseOptions);
        }
export type NotesQueryHookResult = ReturnType<typeof useNotesQuery>;
export type NotesLazyQueryHookResult = ReturnType<typeof useNotesLazyQuery>;
export type NotesQueryResult = ApolloReactCommon.QueryResult<NotesQuery, NotesQueryVariables>;
export const ResetDocument = gql`
    mutation Reset {
  reset
}
    `;
export type ResetMutationFn = ApolloReactCommon.MutationFunction<ResetMutation, ResetMutationVariables>;

/**
 * __useResetMutation__
 *
 * To run a mutation, you first call `useResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetMutation, { data, loading, error }] = useResetMutation({
 *   variables: {
 *   },
 * });
 */
export function useResetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetMutation, ResetMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetMutation, ResetMutationVariables>(ResetDocument, baseOptions);
      }
export type ResetMutationHookResult = ReturnType<typeof useResetMutation>;
export type ResetMutationResult = ApolloReactCommon.MutationResult<ResetMutation>;
export type ResetMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetMutation, ResetMutationVariables>;
export const SettingByTaskNameDocument = gql`
    query settingByTaskName($task: String!) {
  settingByTaskName(task: $task) {
    id
    task
    criteria
    score
    taskId
    criteriaId
  }
}
    `;

/**
 * __useSettingByTaskNameQuery__
 *
 * To run a query within a React component, call `useSettingByTaskNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingByTaskNameQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingByTaskNameQuery({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useSettingByTaskNameQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SettingByTaskNameQuery, SettingByTaskNameQueryVariables>) {
        return ApolloReactHooks.useQuery<SettingByTaskNameQuery, SettingByTaskNameQueryVariables>(SettingByTaskNameDocument, baseOptions);
      }
export function useSettingByTaskNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SettingByTaskNameQuery, SettingByTaskNameQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SettingByTaskNameQuery, SettingByTaskNameQueryVariables>(SettingByTaskNameDocument, baseOptions);
        }
export type SettingByTaskNameQueryHookResult = ReturnType<typeof useSettingByTaskNameQuery>;
export type SettingByTaskNameLazyQueryHookResult = ReturnType<typeof useSettingByTaskNameLazyQuery>;
export type SettingByTaskNameQueryResult = ApolloReactCommon.QueryResult<SettingByTaskNameQuery, SettingByTaskNameQueryVariables>;
export const SettingDocument = gql`
    query Setting($id: Int!) {
  setting(id: $id) {
    id
    task
    criteria
    score
    taskId
    criteriaId
  }
}
    `;

/**
 * __useSettingQuery__
 *
 * To run a query within a React component, call `useSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSettingQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SettingQuery, SettingQueryVariables>) {
        return ApolloReactHooks.useQuery<SettingQuery, SettingQueryVariables>(SettingDocument, baseOptions);
      }
export function useSettingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SettingQuery, SettingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SettingQuery, SettingQueryVariables>(SettingDocument, baseOptions);
        }
export type SettingQueryHookResult = ReturnType<typeof useSettingQuery>;
export type SettingLazyQueryHookResult = ReturnType<typeof useSettingLazyQuery>;
export type SettingQueryResult = ApolloReactCommon.QueryResult<SettingQuery, SettingQueryVariables>;
export const SettingsDocument = gql`
    query Settings {
  settings {
    id
    task
    criteria
    score
    taskId
    criteriaId
  }
}
    `;

/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
        return ApolloReactHooks.useQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, baseOptions);
      }
export function useSettingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, baseOptions);
        }
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<typeof useSettingsLazyQuery>;
export type SettingsQueryResult = ApolloReactCommon.QueryResult<SettingsQuery, SettingsQueryVariables>;
export const ChangeIssueDocument = gql`
    subscription changeIssue {
  changeIssue {
    issue
    id
  }
}
    `;

/**
 * __useChangeIssueSubscription__
 *
 * To run a query within a React component, call `useChangeIssueSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChangeIssueSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChangeIssueSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChangeIssueSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChangeIssueSubscription, ChangeIssueSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ChangeIssueSubscription, ChangeIssueSubscriptionVariables>(ChangeIssueDocument, baseOptions);
      }
export type ChangeIssueSubscriptionHookResult = ReturnType<typeof useChangeIssueSubscription>;
export type ChangeIssueSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChangeIssueSubscription>;
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
export const TaskTitleDocument = gql`
    query TaskTitle($title: String!) {
  taskTitle(title: $title) {
    id
    title
    status
  }
}
    `;

/**
 * __useTaskTitleQuery__
 *
 * To run a query within a React component, call `useTaskTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useTaskTitleQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TaskTitleQuery, TaskTitleQueryVariables>) {
        return ApolloReactHooks.useQuery<TaskTitleQuery, TaskTitleQueryVariables>(TaskTitleDocument, baseOptions);
      }
export function useTaskTitleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TaskTitleQuery, TaskTitleQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TaskTitleQuery, TaskTitleQueryVariables>(TaskTitleDocument, baseOptions);
        }
export type TaskTitleQueryHookResult = ReturnType<typeof useTaskTitleQuery>;
export type TaskTitleLazyQueryHookResult = ReturnType<typeof useTaskTitleLazyQuery>;
export type TaskTitleQueryResult = ApolloReactCommon.QueryResult<TaskTitleQuery, TaskTitleQueryVariables>;
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
    mutation UpdateIssue($input: UpdateIssueInput!) {
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
export const UpdateNoteDocument = gql`
    mutation UpdateNote($input: UpdateNoteInput!) {
  updateNote(input: $input) {
    id
    note
  }
}
    `;
export type UpdateNoteMutationFn = ApolloReactCommon.MutationFunction<UpdateNoteMutation, UpdateNoteMutationVariables>;

/**
 * __useUpdateNoteMutation__
 *
 * To run a mutation, you first call `useUpdateNoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNoteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNoteMutation, UpdateNoteMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateNoteMutation, UpdateNoteMutationVariables>(UpdateNoteDocument, baseOptions);
      }
export type UpdateNoteMutationHookResult = ReturnType<typeof useUpdateNoteMutation>;
export type UpdateNoteMutationResult = ApolloReactCommon.MutationResult<UpdateNoteMutation>;
export type UpdateNoteMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateNoteMutation, UpdateNoteMutationVariables>;
export const UpdateSettingDocument = gql`
    mutation UpdateSetting($input: UpdateSettingInput!) {
  updateSetting(input: $input) {
    id
    task
    criteria
    score
    taskId
    criteriaId
  }
}
    `;
export type UpdateSettingMutationFn = ApolloReactCommon.MutationFunction<UpdateSettingMutation, UpdateSettingMutationVariables>;

/**
 * __useUpdateSettingMutation__
 *
 * To run a mutation, you first call `useUpdateSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingMutation, { data, loading, error }] = useUpdateSettingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSettingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSettingMutation, UpdateSettingMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSettingMutation, UpdateSettingMutationVariables>(UpdateSettingDocument, baseOptions);
      }
export type UpdateSettingMutationHookResult = ReturnType<typeof useUpdateSettingMutation>;
export type UpdateSettingMutationResult = ApolloReactCommon.MutationResult<UpdateSettingMutation>;
export type UpdateSettingMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSettingMutation, UpdateSettingMutationVariables>;
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