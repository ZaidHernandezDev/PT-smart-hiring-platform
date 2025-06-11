import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export default function DialogDetails({open, handleClose, selectedUser}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Detalles del usuario</DialogTitle>
      <DialogContent>
        {selectedUser && (
          <div>
            <p>
              <b>Nombre:</b> {selectedUser.name}
            </p>
            <p>
              <b>Email:</b> {selectedUser.mail}
            </p>
            <p>
              <b>Teléfono:</b> {selectedUser.phone}
            </p>
            <p>
              <b>Salario:</b> {selectedUser.salario}
            </p>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
}
