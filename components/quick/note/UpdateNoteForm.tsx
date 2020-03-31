import React, { useState, useEffect, useRef} from 'react';
import { useUpdateNoteMutation } from '../../../generated/graphql';
import { useRouter } from 'next/router';
import Input from '../../common/Input'
import Select from '../../common/Select'
import ReactToPrint from 'react-to-print';
import Button from '@material-ui/core/Button';
import LastestIssue from '../issue/LatestIssue';
const textArea = {
  'width': '25rem',
  'height': '25rem',
  'margin': '1rem'
}
const printContainer = {
  'margin': '0 0 1rem 0'
}
interface Values {
  issueId: number;
  note: string;
}

interface Props {
  initialValues: Values;
  onNoteUpdate: () => void
}

const UpdateNoteForm: React.FC<Props> = ({ initialValues, onNoteUpdate }) => {
  const [values, setValues] = useState<Values>(initialValues);
  const [updateNoteMutation, { data, loading, error }] = useUpdateNoteMutation({
    onCompleted: () => {
      onNoteUpdate()
    }
  });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newValue = {
      ...values,
      [name]: value
    }
    setValues(newValue)
    //console.log('change name', name, 'value', value, 'values', values, 'newValue', newValue)
    updateNoteMutation(
      {
        variables: {
        input: {
          id: newValue.issueId,
          note: newValue.note
        }
      }
    })
  };
  const componentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={componentRef} className="print-notes">
        <h4>Consensus Descision Making Session: </h4>
        <LastestIssue isPrint={true} />
        <p>Date: {new Intl.DateTimeFormat('en-GB').format(new Date())} </p>
        <textarea style={textArea} 
            name="note"
            placeholder="Your Note"
            value={values.note}
            onChange={handleTextareaChange}
            ></textarea>
      </div>    
      <div style={printContainer}>
        <ReactToPrint
          trigger={() => <Button variant="contained" color="primary">Print Notes</Button>}
          pageStyle='
              @media print {
              body { 
                -webkit-print-color-adjust: exact; 
                padding: 20px !important; 
                font: 12pt Arial, "Times New Roman", Times, serif;} 
            }'
          onBeforeGetContent={()=> {console.log('on before get content', componentRef.current)}}   
          content={() => componentRef.current}
        />
      </div> 

      </>
  );
};

export default UpdateNoteForm;
