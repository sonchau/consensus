import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { withApollo } from '../../../lib/apollo';
import { useNoteQuery } from '../../../generated/graphql';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import UpdateNoteForm from './UpdateNoteForm';

const note = {
    'margin': '1rem auto',
    'text-align': 'center',
    'position': 'absolute' as 'absolute',
    'top': '7.5rem',
    'right': '2rem',
    'border': '1px solid #ccc',
    'background': '#ccc',
    'borderRadius': '5px',
}

const noteButton = {
    'margin': '1rem 0 0'
}
const LastestNote = () => {
    const currentIssue = JSON.parse(localStorage.getItem('issueId') || '{}')
    const [open, setOpen] = useState(false)

    //console.log('currentIssue', currentIssue)
    const {loading, error, data, refetch} = useNoteQuery({
        variables: {
            id: currentIssue
        },
    })
    
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setOpen(!open)
    }
    if (loading) {
        return <p>Loading...</p>;
      } else if (error) {
        return <p>An error occurred.</p>;
      }

    //console.log('data lastest note', data, 'currentIssue', currentIssue)
    console.log('open', open)
    return (
        <div style={note}>
        <Button variant="contained" color="secondary" onClick={handleClick}>{open ? 'Close Notes' : 'Open Notes'}</Button>
        <div className ={open ? 'show' : 'hide'}>
            <UpdateNoteForm 
                onNoteUpdate={refetch}
                initialValues={{issueId: currentIssue, note: data!.note!.note}} /> 
            </div>
        </div>
    )
}

export default LastestNote
