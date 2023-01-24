import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';

import { useStore } from '~/hooks';
import DefaultModal from '~/components/DefaultModal';
import Background from '~/components/Background';
import LateralMenu from '~/components/LateralMenu';
import EffectsBoard from '~/components/EffectsBoard';
import AudioPlayer from '~/components/AudioPlayer';
import styles from './Main.module.scss';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import DraggableModal from '~/components/DraggableModal';
import { AuthLoading } from '~/components/Loading';

const cx = classNames.bind(styles);
function Main() {
    const query = new URLSearchParams(useLocation().search);
    const { currentUser } = useStore();
    const navigate = useNavigate();
    const handleClose = () => navigate('/');

    return (
        <div className={cx('wrapper')}>
            <Background />
            <AuthLoading />
            <DefaultModal />
            <DraggableModal />
            <EffectsBoard />
            <LateralMenu />
            <AudioPlayer />
            {query?.get('auth') === 'login' && !currentUser && (
                <Login onClose={handleClose} changePage={(path) => navigate(path)} />
            )}
            {query?.get('auth') === 'signup' && !currentUser && (
                <SignUp onClose={handleClose} changePage={() => navigate('?auth=login')} />
            )}
            {query?.get('auth') === 'reset-password' && !currentUser && (
                <ForgotPassword onClose={handleClose} changePage={() => navigate('?auth=signup')} />
            )}
        </div>
    );
}

export default Main;
