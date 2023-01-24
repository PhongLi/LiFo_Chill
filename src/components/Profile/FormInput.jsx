import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import PropsType from 'prop-types';

const cx = classNames.bind(styles);

function FormInput({ required, value, label, id, type, setValue }) {
    return (
        <div className={cx('form-input')}>
            <label htmlFor={id} className={cx('label')}>
                {label}
            </label>
            <input
                required={required}
                id={id}
                type={type}
                defaultValue={value ?? ''}
                className={'general-input'}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

FormInput.propsType = {
    value: PropsType.string,
    label: PropsType.string.isRequired,
    id: PropsType.string.isRequired,
    type: PropsType.string.isRequired,
    setValue: PropsType.func.isRequired,
};
export default FormInput;
