import { Alert, Snackbar } from '@mui/material';
import React from 'react';

const Notification = ({ open, severity, message, onClose }) => {
    return (
        <Snackbar
            open={open}
            onClose={onClose}
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert severity={severity} sx={{ width: '100%', fontSize: '1.4rem' }} variant="filled" elevation={6}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
