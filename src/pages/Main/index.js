import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import DefaultModal from '~/components/DefaultModal';
import Background from '~/components/Background';
import LateralMenu from '~/components/LateralMenu';
import EffectsBoard from '~/components/EffectsBoard';
import AudioPlayer from '~/components/AudioPlayer';

const cx = classNames.bind(styles);
function Main() {

    return (
        <div className={cx('wrapper')}>
            <Background />
            <DefaultModal />
            <EffectsBoard />
            <LateralMenu />
            <AudioPlayer />
            
        </div>
    );
}

export default Main;
