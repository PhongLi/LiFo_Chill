import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { sets } from '~/assets/data/sets.data';
import { closePopupIcon, deleteIcon, editIcon, moreIcon, smallPlayIcon } from '~/assets/icons';
import { getEffectIcon } from '~/utils/icon-map/effects';

import styles from './TemplateItem.module.scss';

const cx = classNames.bind(styles);

function TemplateItem({ template, onEdit, onDelete, onPlay }) {
    const [isMenu, setInMenu] = useState(false);
    const set = sets.find((s) => s._id === template.setId);
    const scene = set.scenes[template.sceneIndex];

    return (
        <div className={cx('wrapper')}>
            <img src={scene.thumbnail} alt="thumbnail" />
            <div className={cx('template-menu')}>
                {isMenu ? (
                    <>
                        <img
                            src={closePopupIcon}
                            alt="close"
                            className={cx('closeMenu')}
                            onClick={() => setInMenu(false)}
                        />
                        <img src={deleteIcon} alt="delete icon" onClick={onDelete} />
                        <img src={editIcon} alt="edit icon" onClick={onEdit} />
                    </>
                ) : (
                    <>
                        <img src={smallPlayIcon} alt="play icon" onClick={onPlay} />
                        <img src={moreIcon} alt="more icon" onClick={() => setInMenu(true)} />
                    </>
                )}
            </div>
            <div className={cx('template-body')}>
                <p className={cx('template-name')}>{template.name}</p>
                <div className={cx('effects-list')}>
                    {template.effects.map((e, index) => {
                        return <img src={getEffectIcon(e.type, true)} alt="" className={cx('effect')} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
}

TemplateItem.propsType = {
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
};
export default TemplateItem;
