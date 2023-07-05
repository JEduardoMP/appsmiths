import { Button } from "@mui/material";

interface Props {
  closeModal: () => void;
  toDelete: () => void;
}

const DeleteModal = ({closeModal, toDelete}: Props) => {
  return(
    <div className="modal-bg">
      <div className="modal-content">
        <h3 style={{color: 'black'}}>Are you sure you want to delete this element?</h3>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          <Button onClick={closeModal} variant="outlined" color="error">No</Button>
          <Button onClick={toDelete} variant="contained">Yes</Button>
        </div>
      </div>
    </div>
  )
};
export default DeleteModal;