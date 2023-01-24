import { useState } from 'react';
import { useStore } from '~/hooks';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button, { ButtonClose } from '../Button';
import { saveIcon } from '~/assets/icons';
import { UserSelect } from '~/store/user';
import { useSelector } from '~/hooks/useSelector';
import { SessionSelect } from '~/store/session';
import generateId from '~/utils/id-generator/generateId';
import { updateUser } from '~/firebase/services';
import { CircularLoading } from '../Loading';
import styles from './TemplateDialog.module.scss';

const cx = classNames.bind(styles);

function TemplateDialog({ onClose }) {
    const [name, setName] = useState('');
    const { currentUser } = useStore();
    const [isLoading, setLoading] = useState(false);
    const set = useSelector(SessionSelect.getSet);
    const sceneIndex = useSelector(SessionSelect.getSceneIndex);
    const level = useSelector(SessionSelect.getAudioLevel);
    const effects = useSelector(SessionSelect.getPlayerEffects);
    const mood = useSelector(SessionSelect.getPlayerPlaylist);
    const userData = useSelector(UserSelect.getUserData);
    const sceneEffect = useSelector(SessionSelect.getSceneEffect);

    const template = {
        name,
        setId: set._id,
        sceneIndex,
        level,
        effects: effects.filter((e) => e?.active),
        sceneEffect,
        mood,
        _id: generateId(),
    };
    const handleSaveTemplate = async (e) => {
        e.preventDefault();
        if (name.length > 0) {
            setLoading(true);
            const newTemplates = [...userData.templates, template];
            const newData = { ...userData, templates: newTemplates };
            await updateUser(currentUser.uid, newData);
            onClose();
            setLoading(false);
        }
    };
    return (
        <div className={cx('wrapper', 'slide-bottom')}>
            {isLoading && <CircularLoading isLoading={isLoading} className={cx('loading')} />}
            <ButtonClose className={cx('pos')} onClick={onClose} />
            <div className={cx('inner')}>
                <h1 className={cx('title')}>Save Template</h1>
                <form id="save-form" onSubmit={handleSaveTemplate}>
                    <input
                        className={'general-input'}
                        type="text"
                        placeholder="Name of the template"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button type={'rounded'} leftIcon={saveIcon} className={cx('save-btn')} disabled={isLoading}>
                        Save
                    </Button>
                </form>
                <Button type={'clear'} className={cx('cancel-btn')} onClick={onClose}>
                    Cancel
                </Button>
            </div>
        </div>
    );
}

TemplateDialog.propsType = {
    onClose: PropTypes.func.isRequired,
};
export default TemplateDialog;
