import React from 'react';

import classNames from 'classnames/bind';
import PropsType from 'prop-types';

import Carousel from './Carousel';
import styles from './Tutorial.module.scss';
import { ButtonClose } from '~/components/Button';

const cx = classNames.bind(styles);

function Tutorial({ onClose }) {
    return (
        <div className={cx('tutorial')}>
            <ButtonClose className={cx('pos')} onClick={onClose} />
            <div className={cx('slider')}>
                <Carousel onClose={onClose} />
            </div>
        </div>
    );
}

Tutorial.propsType = {
    onClose: PropsType.func.isRequired,
};
export default Tutorial;
