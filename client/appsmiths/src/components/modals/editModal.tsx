import React, { useEffect, useState } from 'react';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Inputs } from '../../types';
import { getUserById } from '../../services/getUserById';

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
  update: (payload: Inputs) => void;
  id: number;
}

const EditModal = ({ closeModal, update, id }: Modal) => {
  const [ inputs, setInputs ] = useState<Inputs>({
    company_name: "",
    full_name: "",
    job_title: "",
    email: "",
    software_username: "",
    version: "",
  })

  useEffect(() => {
    getUserById(id)
      .then(res => {
        const copiedInputs = {...inputs}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        Object.entries(res).forEach(([k, v]) => copiedInputs[k] = v)
        setInputs(copiedInputs)
      })
  }, [])

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copiedInputs = {...inputs}
    copiedInputs[e.target.name] = e.target.value
    setInputs(copiedInputs)
  }
  return (
    <div className="modal-bg">
      <div className="modal-content">
        <h3 style={{ color: 'black' }}>Edit the data from the fields</h3>
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
          <Button onClick={() => update(inputs)} variant="contained">Create</Button>
        </div>
      </div>
    </div>
  )
};
export default EditModal;