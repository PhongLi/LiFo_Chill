import { Backdrop, CircularProgress } from '@mui/material';

function CircularLoading({ isLoading, className }) {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                position: 'absolute',
            }}
            open={isLoading}
            className={className}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default CircularLoading;
