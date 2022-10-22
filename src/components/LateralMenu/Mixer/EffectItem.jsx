import classNames from 'classnames/bind';
import ReactSlider from 'react-slider';
import PropTypes from 'prop-types';

import styles from './Mixer.module.scss';
const cx = classNames.bind(styles);

function EffectItem({ icon, label, level, changeVol, changeScene }) {
    return (
        <div className={cx('effect-volume')}>
            <p>{label}</p>
            <ReactSlider
                className={cx('volume-slider')}
                defaultValue={level*100}
                onChange={(value) => changeVol(value/100)}
                onAfterChange={(value) => {changeScene(value !== 0)}}
                renderThumb={(props, state) => {
                    return (
                        <div {...props} className={cx('volume-thumb')}>
                            <img src={icon} alt="" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    );
                }}
                renderTrack={(props, state) => {
                    return (
                        <div
                            {...props}
                            index={state.index}
                            className={cx('volume-track', `${state.index === 0 && state.value !== 0 ? 'active' : ''}`)}
                        ></div>
                    );
                }}
            />
        </div>
    );
}
EffectItem.propsType = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    changeVol: PropTypes.func.isRequired,
    changeScene: PropTypes.func
};

export default EffectItem;
