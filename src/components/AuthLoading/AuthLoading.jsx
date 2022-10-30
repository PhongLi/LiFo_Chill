import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector } from '~/hooks/useSelector';
import { UserSelect } from '~/store/user';

const AuthLoading = () => {
    const loading = useSelector(UserSelect.getAuthLoadingStatus);
    return (
        <Backdrop open={loading} sx={{ zIndex: 9999999999 }}>
            <CircularProgress sx={{ color: 'white' }} />
        </Backdrop>
    );
};

export default AuthLoading;
