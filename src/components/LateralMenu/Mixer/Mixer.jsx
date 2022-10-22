import classNames from 'classnames/bind';
import ReactSlider from 'react-slider';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { chillIcon, jazzyIcon, sleepyIcon, volumeMaxIcon, volumeMinIcon } from '~/assets/icons';
import { logoPng } from '~/assets/images';
import EffectItem from './EffectItem';
import { getEffectIcon } from '~/utils/icon-map/effects';
import { useSelector } from '~/hooks/useSelector';
import { useStore } from '~/hooks';
import { SessionSelect, setAudioVolume, setEffectVolume, setMixMode, setPlaylist, setSceneEffect } from '~/store/session';
import styles from './Mixer.module.scss';
const cx = classNames.bind(styles);

function Mixer() {
    const { session } = useStore();
    const [, sessionDispatch] = session;

    const currentSet = useSelector(SessionSelect.getSet);
    const currentScene = useSelector(SessionSelect.getScene);
    const activeEffects = useSelector(SessionSelect.getPlayerEffects);
    const mixMode = useSelector(SessionSelect.getMixMode);
    const audioLevel = useSelector(SessionSelect.getAudioLevel);
    const currentPlaylist = useSelector(SessionSelect.getPlayerPlaylist)

    const changePlaylist = (type) => sessionDispatch(setPlaylist({type}));

    //change volume of effect sound
    const handleChangeEffectVol = (effect, level) => {
        sessionDispatch(setEffectVolume({ effect, level }));
    };

    const handelChangeAudioVol = (level) => {
        sessionDispatch(setAudioVolume({ level }));
    };

    const handleChangeScene = (effect, active) => {
        if (Object.keys(currentScene.variants).includes(effect)) {
            sessionDispatch(setSceneEffect({ effect, active }));
        }
    };
    return (
        <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <h4 className={cx('title')}>Mood</h4>
                    <img src={logoPng} alt="" />
                </div>
            <div className={cx('mixer-panel')}>
                <div className={cx('moods')}>
                    <div
                        className={cx('mood-item', `${currentPlaylist === 'sleepy' && 'selected'}`)}
                        onClick={() => changePlaylist('sleepy')}
                    >
                        <ReactSVG src={sleepyIcon} alt="sleepy" className={cx('mood-icon')} />
                        <p>Sleepy</p>
                    </div>
                    <div
                        className={cx('mood-item', `${currentPlaylist === 'jazzy' && 'selected'}`)}
                        onClick={() => changePlaylist('jazzy')}
                    >
                        <ReactSVG src={jazzyIcon} alt="jazzy" className={cx('mood-icon')} />
                        <p>Jazzy</p>
                    </div>
                    <div
                        className={cx('mood-item', `${currentPlaylist === 'chill' && 'selected'}`)}
                        onClick={() => changePlaylist('chill')}
                    >
                        <ReactSVG src={chillIcon} alt="chill" className={cx('mood-icon')} />
                        <p>Chill</p>
                    </div>
                </div>
                <div className={cx('music-volume')}>
                    <ReactSVG src={volumeMinIcon} alt="volume min" />
                    <ReactSlider
                        className={cx('volume-slider')}
                        renderThumb={(props, state) => {
                            return <div {...props} className={cx('volume-thumb')} />;
                        }}
                        defaultValue={audioLevel * 100}
                        onChange={(value) => handelChangeAudioVol(value / 100)}
                        renderTrack={(props, state) => {
                            return (
                                <div
                                    {...props}
                                    index={state.index}
                                    className={cx('volume-track', `${state.index === 0 ? 'active' : ''}`)}
                                />
                            );
                        }}
                    />
                    <ReactSVG src={volumeMaxIcon} alt="volume max" />
                </div>
                <h4 className={cx('title')}>Sounds</h4>
                <div className={cx('effects-container')}>
                    {currentSet.effects.map((e, index) => {
                        const effect = activeEffects.find((effect) => effect.type === e);
                        return (
                            <EffectItem
                                label={effect.name}
                                level={effect.level ?? 0}
                                changeVol={(level) => handleChangeEffectVol(effect, level)}
                                changeScene={(active) => handleChangeScene(effect.type, active)}
                                key={index}
                                icon={getEffectIcon(effect.type, effect.active)}
                            />
                        );
                    })}
                    <div>
                        {mixMode &&
                            activeEffects
                                .filter((e) => !currentSet.effects.includes(e.type))
                                .map((effect, index) => {
                                    return (
                                        <EffectItem
                                            label={effect.name}
                                            level={effect.level ?? 0}
                                            changeVol={(level) => handleChangeEffectVol(effect, level)}
                                            changeScene={() => {}} //no need change scene 
                                            key={index}
                                            icon={getEffectIcon(effect.type, effect.active)}
                                        />
                                    );
                                })}
                    </div>
                </div>
            </div>
            <div className={cx('footer')} onClick={() => sessionDispatch(setMixMode())}>
                <p className={cx('effect-mode')}>{mixMode ? 'Normal Mode' : 'Mix Mode'}</p>
            </div>
        </div>
    );
}

export default Mixer;
