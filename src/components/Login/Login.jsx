import classNames from 'classnames/bind';
import { logoGif } from '~/assets/images';
import Button, { ButtonClose } from '../Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
function Login({ onClose, changePage }) {
    return (
        <div className={cx('wrapper')}>
            <ButtonClose className={cx('pos')} onClick={onClose} />
            <div className={cx('login-form')}>
                <img src={logoGif} alt="logo" className={cx('logoGif')} />
                <h1 className={cx('greeting')}>Welcome back!</h1>
                <h4>Log In to your account</h4>
                <form action="" id="form">
                    <div className={cx('form-container')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-control')}>
                                <input id="email" placeholder="Email" className={cx('login-input')} type="text" />
                                <div />
                            </div>
                            <div className={cx('form-control')}>
                                <input id="password" placeholder="password" className={cx('login-input')} type="text" />
                                <div />
                            </div>
                        </div>
                        <Button type="rounded" className={cx('login-btn')}>
                            Login
                        </Button>
                        <p className={cx('accent', 'reset-pwd')}>Forgot password?</p>
                        <div className={cx('sign-up-option')}>
                            <p>Don't have an account?</p>
                            <p className={cx('accent')} onClick={changePage}>
                                Sign Up for free
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
