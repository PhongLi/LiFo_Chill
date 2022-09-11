import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import PropsType from 'prop-types';

import Button from '~/components/Button';
import { logoGif } from '~/assets/images';
import { Titles } from '~/constants';
import styles from './Tutorial.module.scss';

const cx = classNames.bind(styles);

function Carousel({ onClose }) {
    const [page, setPage] = useState(0);
    const slickRef = useRef();

    // Click next slide
    const handleNext = () => {
        slickRef?.current?.slickNext();
    };
    const getPageIndex = (current, next) => {
        setPage(next);
    };

    const handleExit = onClose;

    const setting = {
        arrows: false,
        autoplay: false,
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        dots: true,
        beforeChange: getPageIndex,
        customPaging: () => (
            <div style={{ paddingBottom: '10px' }}>
                <div className={cx('customDots')}></div>
            </div>
        ),
    };

    return (
        <>
            <Slider {...setting} ref={slickRef} className={cx('carousel')}>
                <div>
                    <img src={logoGif} alt="logo" className={cx('logoGif')} />
                </div>
                <div>
                    <video
                        src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/Video%201%20-%20Mixer.mp4"
                        muted
                        autoPlay
                        loop
                        className={cx('video-tut')}
                    ></video>
                </div>
                <div>
                    <video
                        src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-environment.mp4"
                        muted
                        autoPlay
                        loop
                        className={cx('video-tut')}
                    ></video>
                </div>
                <div>
                    <video
                        src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-sounds.mp4"
                        muted
                        autoPlay
                        loop
                        className={cx('video-tut')}
                    ></video>
                </div>
                <div>
                    <video
                        src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-tools.mp4"
                        muted
                        autoPlay
                        loop
                        className={cx('video-tut')}
                    ></video>
                </div>
            </Slider>

            <div className={cx('content')}>
                <h2 className={cx('title')}>{Titles[page].title1}</h2>
                <h2 className={cx('title')}>{Titles[page].title2}</h2>
                <p
                    className={cx('desc')}
                    style={{ textAlign: page === 0 && 'center' }}
                    dangerouslySetInnerHTML={{ __html: Titles[page].msg }}
                />
                <p className={cx('desc')} dangerouslySetInnerHTML={{ __html: Titles[page].msg2 }} />
            </div>
            <div className={cx('action-btn')}>
                <Button type={'rounded'} onClick={page === 4 ? handleExit : handleNext}>
                    {page === 0 ? 'Take tour' : 'Next'}
                </Button>
                <Button type={'clear'} className={cx('exit')} onClick={handleExit}>
                    Leave tutorial
                </Button>
            </div>
        </>
    );
}

Carousel.propsType = {
    onClose: PropsType.func.isRequired,
};
export default Carousel;
