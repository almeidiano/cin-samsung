import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React from 'react';

export default function Error({ open, onClose, message }) {
    return (
        <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
            <Alert severity="error" variant="filled" sx={{ width: '100%' }}>{message}</Alert>
        </Snackbar>
    );
}
