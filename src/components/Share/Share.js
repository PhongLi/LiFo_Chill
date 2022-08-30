import classNames from 'classnames/bind';
import React, { useContext, useState } from 'react';

import { closeIcon, twitterIcon } from '~/assets/icons';
import styles from './Share.module.scss';
import Button from '~/components/Button';
import { AppContext } from '~/Context/AppProvider';

const cx = classNames.bind(styles);

function Share() {
    const { setModalType } = useContext(AppContext);
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (e) => {
        navigator.clipboard.writeText(e.target.value);
        setIsCopied(true);
    };

    return (
        <div className={cx('share-modal')}>
            <button
                className={cx('close-btn')}
                onClick={() => {
                    setModalType(null);
                    setIsCopied(false);
                }}
            >
                <img src={closeIcon} alt="close" />
            </button>
            <div className={cx('inner')}>
                <h1 className={cx('title')}>Share</h1>
                <p className={cx('desc')}>
                    Copy the link to share your combination of music, scenery and sounds with your friends!
                </p>
                <input
                    onClick={copyToClipboard}
                    className={isCopied && cx('copied')}
                    readOnly
                    value="https://app.lofi.co/"
                    contentEditable={false}
                />
                {isCopied && <p className={cx('text-copied')}>Copied!</p>}
                <Button type={'rounded'} leftIcon={twitterIcon}>
                    Share
                </Button>
            </div>
        </div>
    );
}

export default Share;
