import classNames from 'classnames/bind';
import { Rnd } from 'react-rnd';
import { useStore } from '~/hooks';
import { useSelector } from '~/hooks/useSelector';
import { setDraggableModals, SessionSelect } from '~/store/session';
import TemplateDialog from '../TemplateDialog';

import styles from './DraggableModal.module.scss';

const cx = classNames.bind(styles);
function DraggableModal() {
    const { session } = useStore();
    const [, sessionDispatch] = session;
    const draggableModals = useSelector(SessionSelect.getDraggableModals);
    const handleClose = (modalType) => {
        sessionDispatch(setDraggableModals(modalType));
    };
    return (
        <div className={cx('wrapper')}>
            {draggableModals.includes('templates') && (
                <Rnd
                    style={{ pointerEvents: 'all' }}
                    bounds="window"
                    default={{
                        x: window.screen.width / 2 - 290,
                        y: window.screen.height / 2 - 140,
                        width: 380,
                        height: 280,
                    }}
                    enableResizing={false}
                >
                    <TemplateDialog onClose={() => handleClose('templates')} />
                </Rnd>
            )}
        </div>
    );
}

export default DraggableModal;
