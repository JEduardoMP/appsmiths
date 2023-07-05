import { useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css'
import UpdateSuscriptionModal from './components/modals/updateSuscriptionModal'
import EditModal from './components/modals/editModal'
import { getAllUsers } from './services/getAllUsers'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Button } from '@mui/material';
import DeleteModal from './components/modals/deleteModal';
import { deleteUser } from './services/deleteUser';

interface User {
  id: number;
  company_name: string;
  email: string
  expiration_date: Date;
  full_name: string;
  job_title: string;
  software_username: string;
  version: string;
}

function App() {
  const [ users, setUsers ] = useState<User[] | undefined>([])
  const [modals, setModals] = useState({
    create: false,
    update: false,
    edit: false,
    delete: false,
  })

  const handleUsers = () => {
    getAllUsers()
      .then((res: User[] | undefined) => {
        setUsers(res)
      })
  }

  useEffect(handleUsers, [])

  const handleModal = (modal:string) => {
    const copiedModal: any = {...modals}
    console.log(modal)
    copiedModal[modal] = true
    setModals(copiedModal)
  }

  const handleClose = () => {
    setModals({
      create: false,
      update: false,
      edit: false,
      delete: false,
    })
  }

  const handleDlete = (id: number) => () => {
    deleteUser(id)
      .then(() => {
        setModals({
          create: false,
          update: false,
          edit: false,
          delete: false,
        })
        handleUsers()
      })
  }

  return (
    <>
      {modals.update && <UpdateSuscriptionModal />}
      {modals.edit && <EditModal />}
      
      {modals.create && <EditModal />}
      <Button onClick={() => handleModal('create')}>Create</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {users && users.length > 0 && Object.keys(users[ 0 ]).map(header => (
                <TableCell key={header}>{header}</TableCell>
              ))}
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {Object.values(user).map((info, idx) =>
                  idx ?
                    <TableCell component="th" scope="row">
                      {info}
                    </TableCell>
                    :
                    <TableCell align="right">{info}</TableCell>
                )}
                <TableCell>
                  <Button onClick={() => handleModal('edit')} variant="contained">
                    <ChangeCircleIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleModal('update')} variant="outlined" color='success'>
                    <AccessAlarmsIcon />
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleModal('delete')} variant="contained" color="error">
                    <DeleteIcon />
                  </Button>
                </TableCell>
                {modals.delete && <DeleteModal closeModal={handleClose} toDelete={handleDlete(user.id)} />}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
