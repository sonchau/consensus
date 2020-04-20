import React, { useState } from 'react';
import {useCreateCriteriaMutation} from '../../../generated/graphql'
import Input from '../../common/Input'
import Select from '../../common/Select'
import Cookie from 'js-cookie';
import { COOKIES } from "../../../services/cookie";

interface Props {
  onVoteCreated: () => void
}


const VoteForm: React.FC<Props> = ({onVoteCreated}) => {

  return (

    <div className="form-container">
      <h3>Participants to assign importance to each measure of success </h3>
      <h2>Participants go to:</h2>


      <form  className="form">

      </form>
    </div>
  );
};

export default VoteForm;
