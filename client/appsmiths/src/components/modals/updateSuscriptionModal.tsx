import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface Modal {
  closeModal: () => void;
  update: (date: number | null) => void;
}

const UpdateSuscriptionModal = ({closeModal, update}: Modal) => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null)
  return(
    <div className="modal-bg">
      <div className="modal-content">
        <h3 style={{color: 'black'}}>Select the time to update the suscription</h3>
        <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center', justifyContent: 'center'}}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Duration</InputLabel>
            <Select 
              onChange={(e: SelectChangeEvent<number| null>) => setSelectedTime(e.target.value as number)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={12}>12</MenuItem>
            </Select>
          </FormControl>
          <p style={{color: 'black', fontSize: '0.7rem'}}><strong>MONTHS</strong></p>
        </div>
        <div style={{display: 'flex', gap: '1.5rem', marginTop: '2rem'}}>
          <Button onClick={closeModal} variant="outlined" color="error">Close</Button>
          <Button onClick={() => update(selectedTime)} variant="contained">Update</Button>
        </div>
      </div>
    </div>
  )
};
export default UpdateSuscriptionModal;