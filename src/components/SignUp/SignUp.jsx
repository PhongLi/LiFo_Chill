import classNames from 'classnames/bind';
import { logoGif } from '~/assets/images';
import Button, { ButtonClose } from '../Button';
import styles from './SignUp.module.scss';
import { eye1, eye2 } from '~/assets/icons';
import { useState } from 'react';
const cx = classNames.bind(styles);
function SignUp({ onClose, changePage }) {
    const [isHidden, setHidden] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <ButtonClose className={cx('pos')} onClick={onClose} />
            <div className={cx('signUp-form')}>
                <img src={logoGif} alt="logo" className={cx('logoGif')} />
                <h1 className={cx('greeting')}>Nice to meet you!</h1>
                <h4>Sign up for a free account.</h4>
                <form action="" id="form">
                    <div className={cx('form-container')}>
                        <div className={cx('form-group')}>
                            <div className={cx('form-control')}>
                                <input
                                    id="username"
                                    placeholder="Username"
                                    className={cx('signUp-input')}
                                    type="text"
                                />
                                <div />
                            </div>
                            <div className={cx('form-control')}>
                                <input id="email" placeholder="Email" className={cx('signUp-input')} type="text" />
                                <div />
                            </div>
                            <div className={cx('form-control')}>
                                <input
                                    id="password"
                                    placeholder="password"
                                    className={cx('signUp-input')}
                                    type="text"
                                />
                                <div />
                                <img
                                    src={isHidden ? eye1 : eye2}
                                    alt=""
                                    className={cx('hidden-eye')}
                                    onClick={() => setHidden(!isHidden)}
                                />
                            </div>
                        </div>
                        <p className={cx('privacy')}>
                            By signing up, you agree to our <br />
                            <span className={cx('accent')}>Privacy Policy & Terms of Service</span>
                        </p>
                        <Button type="rounded" className={cx('signUp-btn')}>
                            Sign up
                        </Button>
                        <div className={cx('login-option')}>
                            <p>Already have an account?</p>
                            <p className={cx('accent')} onClick={changePage}>
                                Log In
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
