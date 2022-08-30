import classNames from 'classnames/bind';
import React, { useContext } from 'react';

import styles from './AboutUs.module.scss';
import { ABOUT_US } from '~/constants';
import { instagramIcon, twitterIcon, mailIcon, closeIcon } from '~/assets/icons';
import { AppContext } from '~/Context/AppProvider';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AboutUs() {
    const { setModalType } = useContext(AppContext);

    return (
        <div className={cx('about-us')}>
            <button className={cx('close-btn')} onClick={() => setModalType(null)}>
                <img src={closeIcon} alt="close" />
            </button>
            <div className={cx('content')}>
                <h1 className={cx('title')}>About us</h1>
                <p>{ABOUT_US.about1}</p>
                <br />
                <br />
                <p>{ABOUT_US.about2}</p>
            </div>
            <div className={cx('social')}>
                <Button type={'social'} href="https://www.instagram.com/lofi/" leftIcon={instagramIcon}>
                    Instagram
                </Button>
                <Button type={'social'} href="https://twitter.com/lofidotco" leftIcon={twitterIcon}>
                    Twitter
                </Button>
                <Button
                    type={'social'}
                    leftIcon={mailIcon}
                    onClick={() => window.open('mailto:hello@lofi.co', '_blank')}
                >
                    hello@lofi.com
                </Button>
            </div>
        </div>
    );
}

export default AboutUs;
