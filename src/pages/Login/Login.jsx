import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import PropsType from 'prop-types';

import { useStore } from '~/hooks';
import { useSelector } from '~/hooks/useSelector';
import { setAuthLoading, UserSelect } from '~/store/user';
import Notification from '../../components/Notification';
import { logoGif } from '~/assets/images';
import Button, { ButtonClose } from '../../components/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login({ onClose, changePage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({ message: '', severity: 'info' });

    const authLoadingStatus = useSelector(UserSelect.getAuthLoadingStatus);
    const { login, user } = useStore();
    const [, userDispatch] = user;

    //delay loading screen before reload page
    useEffect(() => {
        if (authLoadingStatus === false) return; //avoid run useEffect when component mounted
        const timer = setTimeout(() => {
            userDispatch(setAuthLoading({ status: false }));
        }, 6000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authLoadingStatus]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlert({ ...alert, message: '' });

        try {
            userDispatch(setAuthLoading({ status: true }));
            await login(email, password);
            await onClose();
            window.location.reload();
        } catch (error) {
            setAlert({ ...alert, message: 'Incorrect email or password', severity: 'error' });
            userDispatch(setAuthLoading({ status: false }));
            console.log(error.message);
        }
    };
    return (
        <div className={cx('wrapper', 'fade-in')}>
            {alert.message && (
                <Notification
                    open={!!alert.message}
                    severity={alert.severity}
                    message={alert.message}
                    onClose={() => setAlert({ ...alert, message: '' })}
                />
            )}

            <ButtonClose className={cx('pos')} onClick={onClose} />
            <div className={cx('login-form')}>
                <img src={logoGif} alt="logo" className={cx('logoGif')} />
                <h1 className={cx('greeting')}>Welcome back!</h1>
                <h4>Log In to your account</h4>
                <form action="" id="form" onSubmit={handleSubmit}>
                    <div className={cx('form-container')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-control')}>
                                <input
                                    required
                                    id="email"
                                    placeholder="Email"
                                    className={cx('login-input')}
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div />
                            </div>
                            <div className={cx('form-control')}>
                                <input
                                    required
                                    id="password"
                                    placeholder="password"
                                    className={cx('login-input')}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div />
                            </div>
                        </div>
                        <Button disabled={authLoadingStatus} type="rounded" className={cx('login-btn')}>
                            Login
                        </Button>
                        <p className={cx('accent', 'reset-pwd')} onClick={() => changePage('?auth=reset-password')}>
                            Forgot password?
                        </p>
                        <div className={cx('sign-up-option')}>
                            <p>Don't have an account?</p>
                            <p className={cx('accent')} onClick={() => changePage('?auth=signup')}>
                                Sign Up for free
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
Login.propsType = {
    onClose: PropsType.func.isRequired,
    changePage: PropsType.func.isRequired,
};
export default Login;
