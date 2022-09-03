import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutUs.module.scss';
import { ABOUT_US } from '~/constants';
import { instagramIcon, twitterIcon, mailIcon } from '~/assets/icons';
import Button, { ButtonClose } from '~/components/Button';
const cx = classNames.bind(styles);

function AboutUs({ onClose }) {
    return (
        <div className={cx('about-us')}>
            <ButtonClose className={cx('pos')} onClick={onClose} />

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
AboutUs.propsType = {
    onClose: PropTypes.func.isRequired,
};
export default AboutUs;
