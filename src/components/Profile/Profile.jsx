import classNames from 'classnames/bind';
import { useState } from 'react';
import { useStore } from '~/hooks';
import { useSelector } from '~/hooks/useSelector';
import { setAuthLoading, UserSelect } from '~/store/user';
import Button from '../Button';
import Notification from '../Notification';
import FormInput from './FormInput';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile({ onClose }) {
    const { currentUser, logout, changeProfile, changeEmail, changePassword, reauthenticate, user } = useStore();
    const [menuNav, setMenuNav] = useState('profile');
    const [email, setEmail] = useState(currentUser?.email);
    const [username, setUserName] = useState(currentUser?.displayName);
    const [password, setPassword] = useState('');
    const [newPassword, setNewPass] = useState('');
    const [passwordConfirm, setPwConfirm] = useState('');

    const [alert, setAlert] = useState({ message: '', severity: 'info' });

    const [, userDispatch] = user;

    const authLoadingStatus = useSelector(UserSelect.getAuthLoadingStatus);

    const handleLogOut = async () => {
        try {
            await logout();
            await onClose();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeUsername = async (e) => {
        e.preventDefault();
        setAlert({ ...alert, message: '' });
        try {
            userDispatch(setAuthLoading({ status: true }));

            await changeProfile(username);
            setAlert({ ...alert, message: 'Profile updated', severity: 'success' });
        } catch (error) {
            setAlert({ ...alert, message: 'Update fail', severity: 'error' });
        }
        userDispatch(setAuthLoading({ status: false }));
    };

    const handleChangeEmail = async (e) => {
        e.preventDefault();
        setAlert({ ...alert, message: '' });
        try {
            userDispatch(setAuthLoading({ status: true }));
            await changeEmail(email);
            setAlert({ ...alert, message: 'Profile updated', severity: 'success' });
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setAlert({ ...alert, message: 'Email already taken.', severity: 'error' });
            } else if (error.code === 'auth/invalid-email') {
                setAlert({ ...alert, message: 'Please provide a valid email.', severity: 'error' });
            } else {
                setAlert({ ...alert, message: error.code, severity: 'error' });
            }
            console.log(error.code);
        }
        userDispatch(setAuthLoading({ status: false }));
    };

    const handleChangePass = async (e) => {
        e.preventDefault();
        setAlert({ ...alert, message: '' });
        if (newPassword !== passwordConfirm) {
            setAlert({ ...alert, message: 'Password do not match', severity: 'error' });
        } else {
            try {
                userDispatch(setAuthLoading({ status: true }));

                await reauthenticate(password);
                await changePassword(newPassword);
                setAlert({ ...alert, message: 'Profile updated', severity: 'success' });
            } catch (error) {
                if (error.code === 'auth/wrong-password') {
                    setAlert({ ...alert, message: 'Current password wrong', severity: 'error' });
                } else if (error.code === 'auth/weak-password') {
                    setAlert({ ...alert, message: 'New password must be at least 8 characters', severity: 'error' });
                } else {
                    setAlert({ ...alert, message: error.code, severity: 'error' });
                }
            }
            userDispatch(setAuthLoading({ status: false }));
        }
    };

    if (alert.message === 'auth/requires-recent-login') {
        window.confirm('Please login again to continue!');
        setAlert({ ...alert, message: 'Please login again to continue', severity: 'info' });
        handleLogOut();
    }

    return (
        <div className={cx('wrapper')}>
            {alert.message && (
                <Notification
                    open={!!alert.message}
                    severity={alert.severity}
                    message={alert.message}
                    onClose={() => setAlert({ ...alert, message: '' })}
                />
            )}
            {/* <ButtonClose className={cx('pos')} onClick={onClose} /> */}
            <div className={cx('profile-modal')}>
                <div className={cx('pm-menu')}>
                    <img
                        src={'https://memberstack-logos.nyc3.cdn.digitaloceanspaces.com/square/1629549845267Lofi.jpg'}
                        alt="logo"
                        className={cx('logoImg')}
                        style={{ height: '50px' }}
                    />
                    <div
                        className={cx('pm-nav', `${menuNav === 'profile' && 'accent'}`)}
                        onClick={() => setMenuNav('profile')}
                    >
                        Profile
                    </div>
                    <div
                        className={cx('pm-nav', `${menuNav === 'membership' && 'accent'}`)}
                        onClick={() => setMenuNav('membership')}
                    >
                        Membership
                    </div>
                    <div
                        className={cx('pm-nav', `${menuNav === 'logout' && 'accent'}`)}
                        onClick={handleLogOut}
                        style={{ marginTop: '30px' }}
                    >
                        Log out
                    </div>
                </div>
                <div className={cx('pm-content-wrapper')}>
                    {menuNav === 'profile' && (
                        <div>
                            {/* Username update */}

                            <div className={cx('form-group')}>
                                <div className={cx('form-heading')}>My information</div>
                                <form id="profile-username" onSubmit={handleChangeUsername}>
                                    <Button disabled={authLoadingStatus} type={'outline'} className={cx('submit-btn')}>
                                        Update
                                    </Button>
                                    <FormInput
                                        value={username}
                                        label="Username"
                                        id="username"
                                        type="text"
                                        setValue={(value) => setUserName(value)}
                                    />
                                </form>
                            </div>
                            {/* Email update */}
                            <div className={cx('form-group')}>
                                <div className={cx('form-heading')}>Email Address</div>
                                <form id="profile-email" onSubmit={handleChangeEmail}>
                                    <Button disabled={authLoadingStatus} type={'outline'} className={cx('submit-btn')}>
                                        Update Email
                                    </Button>
                                    <FormInput
                                        value={email}
                                        label="Email Address"
                                        id="email"
                                        type="email"
                                        setValue={(value) => setEmail(value)}
                                    />
                                </form>
                            </div>
                            {/* Password update */}

                            <div className={cx('form-group')}>
                                <div className={cx('form-heading')}>Change Password</div>
                                <form id="profile-password" onSubmit={handleChangePass}>
                                    <Button disabled={authLoadingStatus} type={'outline'} className={cx('submit-btn')}>
                                        Change Password
                                    </Button>
                                    <FormInput
                                        required
                                        label="Current Password"
                                        value={password}
                                        id="current-password"
                                        type="password"
                                        setValue={(value) => setPassword(value)}
                                    />
                                    <FormInput
                                        required
                                        label="New Password"
                                        value={newPassword}
                                        id="new-password"
                                        type="password"
                                        setValue={(value) => setNewPass(value)}
                                    />
                                    <FormInput
                                        required
                                        label="Confirm"
                                        value={passwordConfirm}
                                        id="confirm-password"
                                        type="password"
                                        setValue={(value) => setPwConfirm(value)}
                                    />
                                </form>
                            </div>
                        </div>
                    )}
                    {menuNav === 'membership' && (
                        <div>
                            <div className={cx('form-heading')}>Manage Membership</div>
                            <div className={cx('plan-item')}>
                                <div className={cx('plan')}>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                                        Free Plan <span className={cx('plan-status')}>Active</span>
                                    </p>
                                    <p style={{ fontWeight: 700 }}>FREE</p>
                                </div>
                                <div className={cx('cancel')}>Cancel</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
