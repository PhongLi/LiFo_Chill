import classNames from 'classnames/bind';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';

import { sets } from '~/assets/data/sets.data';
import { arrowLeftIcon, premiumIcon } from '~/assets/icons';
import {setSceneAndSet} from '~/Store/session/'
import useStore from '~/hooks/useStore';
import Button from '~/components/Button';

import styles from './SceneSelector.module.scss';
const cx = classNames.bind(styles);

function SceneSelector() {
    const [selectedSet, setSelectedSet] = useState();

    // getSetAndScenes
    const { background } = useStore();
    const [backgroundState, backgroundDispatch] = background;
    
    const currentSet = backgroundState.set;
    const isLogin = false; 


    const handleChangeScene = (set, sceneIndex) => {
        backgroundDispatch(setSceneAndSet({set, sceneIndex}))

    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('scenes-container')}>
                {selectedSet ? (
                    <>
                        {!isLogin && selectedSet.premium && <div className={cx('premium-banner')}>
                            <h4>Please <span className={cx('accent')}>sign in</span> to use this set</h4>
                            <Button type={"rounded"} className={cx('login-btn')}>Sign in</Button>
                        </div>}
                        
                        <div className={cx('scenes-nav')}>
                            <img src={arrowLeftIcon} alt="back" onClick={() => setSelectedSet(undefined)} />
                            <h5 className={cx('title')}>Switch scene</h5>
                        </div>
                        {selectedSet.scenes.map((scene, index) => (
                            <div className={cx('scene-selector')} key={'s' + index} onClick={() => handleChangeScene(selectedSet, index)}>
                                <img
                                    src={scene.thumbnail}
                                    alt="thumbnail"
                                    id={'thumbnail_' + index}
                                    style={{ opacity: 0 }}
                                    className={cx('thumb')}
                                    onLoad={() => {
                                        document.getElementById('thumbnail_' + index).style.opacity = '1';
                                    }}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <h5 className={cx('title')}>Scenes</h5>
                        {sets.map((set, index) => (
                            <div
                                className={cx('scene-selector')}
                                style={{ background: set.thumbnail }}
                                onClick={() => setSelectedSet(set)}
                                key={index}
                            >
                                <img
                                    src={set.thumbnail}
                                    alt="thumbnail"
                                    id={'thumbnail_' + index}
                                    className={cx('thumb')}
                                    style={{ opacity: 0 }}
                                    onLoad={() => {
                                        document.getElementById('thumbnail_' + index).style.opacity =
                                            set === currentSet ? '1' : '0.5';
                                    }}
                                />
                                {!isLogin && set.premium && (
                                    <div className={cx('premium')}>
                                        <ReactSVG src={premiumIcon} alt="premium" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default SceneSelector;
