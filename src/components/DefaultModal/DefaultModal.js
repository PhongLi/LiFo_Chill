import classNames from 'classnames/bind';
import { Transition, Dialog } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import React, { Fragment } from 'react';

import styles from './DefaultModal.module.scss';
import Tutorial from '~/components/Tutorial';
import AboutUs from '~/components/AboutUs';
import Share from '~/components/Share';
import Pricing from '~/components/Pricing';
import { useStore } from '~/hooks';
import Login from '../Login';
import SignUp from '../SignUp';

const cx = classNames.bind(styles);

function DefaultModal() {
    const { modalType, setModalType } = useStore();
    const query = new URLSearchParams(useLocation().search);
    const closeModal = () => setModalType(null);

    return (
        <Transition show={!!modalType} as={Fragment}>
            <Dialog as="div" className={cx('dialog')} onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* backdrop blur */}
                    <div
                        className={`fixed inset-0 
                                   ${
                                       ['Tutorial', 'AboutUs'].includes(modalType)
                                           ? 'bg-black/70 backdrop-blur-xl'
                                           : ['Login', 'SignUp'].includes(modalType)
                                           ? 'bg-black/80'
                                           : 'bg-black/50'
                                   }
                               `}
                        aria-hidden="true"
                    />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="linear duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className={cx('Modal')}>
                        {modalType === 'Tutorial' && <Tutorial onClose={closeModal} />}
                        {modalType === 'AboutUs' && <AboutUs onClose={closeModal} />}
                        {modalType === 'Share' && <Share onClose={closeModal} />}
                        {modalType === 'Pricing' && <Pricing onClose={closeModal} />}
                        {modalType === 'Login' && <Login onClose={closeModal} changePage={()=>setModalType('SignUp')}/>}
                        {modalType === 'SignUp' && <SignUp onClose={closeModal} changePage={()=>setModalType('Login')}/>}
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}

export default DefaultModal;
