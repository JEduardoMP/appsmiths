import React, { useState } from 'react';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Inputs } from '../../types';

const INPUTS: string[] = [
  "company_name",
  "full_name",
  "job_title",
  "email",
  "software_username",
  "version",
]

interface Modal {
  closeModal: () => void;
  create: (payload: Inputs) => void
}

const CreateModal = ({ closeModal, create }: Modal) => {
  const [ inputs, setInputs ] = useState<Inputs>({
    company_name: "",
    full_name: "",
    job_title: "",
    email: "",
    software_username: "",
    version: "",
  })
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copiedInputs = {...inputs}
    copiedInputs[e.target.name] = e.target.value
    setInputs(copiedInputs)
  }
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <h3 style={{ color: 'black' }}>Create a new user</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {INPUTS.map((inputElement) => (
            <TextField
              required
              onChange={handleInputs}
              name={inputElement}
              id="outlined-required"
              label={inputElement}
              value={inputs[inputElement]}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <Button onClick={closeModal} variant="outlined" color="error">Close</Button>
          <Button onClick={() => create(inputs)} variant="contained">Create</Button>
        </div>
      </div>
    </div>
  )
};
export default CreateModal;