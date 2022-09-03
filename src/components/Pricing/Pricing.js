import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import styles from './Pricing.module.scss';
import Button, { ButtonClose } from '~/components/Button';
import Switch from 'react-switch';
import { checkIcon, xIcon } from '~/assets/icons';
import { BASIC_FEATURES, PREMIUM_FEATURES } from '~/constants';
import { socialMosaic } from '~/assets/images';

const cx = classNames.bind(styles);
function Pricing({ onClose }) {
    const [isYearly, setIsYearly] = useState(true);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 100000,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
    };

    function Carousel() {
        return (
            <Slider {...settings}>
                <img src={socialMosaic} alt="mosaic" />
                <img src={socialMosaic} alt="mosaic" />
            </Slider>
        );
    }
    return (
        <div className={cx('Pricing')}>
            <ButtonClose className={cx('pos')} onClick={onClose} />

            <div className={cx('left-col')}>
                <h3 className={cx('title')}>Get more done with premium</h3>

                <div className={cx('options')}>
                    <p style={{ opacity: isYearly ? 0.4 : 1 }}>Pay monthly</p>
                    <Switch
                        height={30}
                        width={56}
                        checked={isYearly}
                        onChange={(checked) => setIsYearly(checked)}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        onColor="#24242f"
                        offColor="#24242f"
                        onHandleColor="#f3a952"
                        offHandleColor="#f3a952"
                        handleDiameter={25}
                        activeBoxShadow="0 0 0 0 transparent"
                    />
                    <p style={{ opacity: isYearly ? 1 : 0.4 }}>Pay yearly</p>
                    <div className={cx('save-label')} style={{ opacity: isYearly ? 1 : 0 }}>
                        Save 25%
                    </div>
                </div>

                <div className={cx('plans')}>
                    <div className={cx('plan-basic', 'box')}>
                        <h3 className={cx('plan-name')}>Basic</h3>
                        <p className={cx('price')}>$0</p>
                        <p className={cx('guarantee-note')}>
                            <br />
                        </p>
                        <Button type={'rounded'} className={cx('basic-btn')}>
                            Current Plan
                        </Button>
                        <div className={cx('features-list')}>
                            {BASIC_FEATURES.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('feature', {
                                        disabled: !item.checked,
                                    })}
                                >
                                    {item.checked ? (
                                        <img src={checkIcon} alt="checked" />
                                    ) : (
                                        <img src={xIcon} alt="cross" />
                                    )}
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('plan-premium', 'box')}>
                        <h3 className={cx('plan-name')}>Premium</h3>
                        <p className={cx('price')}>
                            {isYearly ? '$2,99' : '$3.99'}{' '}
                            <span style={{ color: '#fff', fontSize: '1.5rem' }}>/ mo</span>
                        </p>
                        <p className={cx('guarantee-note')}>*7-day money back guarantee</p>
                        <Button type={'rounded'} className={cx('premium-btn')}>
                            Upgrade
                        </Button>
                        <div className={cx('features-list')}>
                            {PREMIUM_FEATURES.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('feature', {
                                        disabled: !item.checked,
                                    })}
                                >
                                    {item.checked ? (
                                        <img src={checkIcon} alt="checked" />
                                    ) : (
                                        <img src={xIcon} alt="cross" />
                                    )}
                                    <p>
                                        {item.accent && <span className={cx('accent')}>{item.accent} </span>}
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('more-info')}>*1% of every sale supports mental health organizations worldwide</div>
            </div>
            <div className={cx('right-col')}>
                <h3 className={cx('title')}>
                    Join the <span className={cx('accent')}>lofi.co</span> family
                </h3>
                <div className={cx('box')}>
                    <h3 className={cx('accent')}>+150.000</h3>
                    <p>Users chilling every month</p>
                </div>
                <h3 className={cx('title')}>Don't believe in numbers?</h3>
                <h6>Read what users write on socials about us.</h6>

                <div className={cx('mosaic')}>
                    <Carousel />
                </div>
            </div>
        </div>
    );
}
Pricing.propsType = {
    onClose: PropTypes.func.isRequired,
};

export default Pricing;
