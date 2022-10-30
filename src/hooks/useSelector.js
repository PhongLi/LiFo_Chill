import useStore from './useStore';

export const useSelector = (callback) => {
    const { session, user } = useStore();
    const [sessionState] = session;
    const [userState] = user;
    // merge state
    const State = { ...sessionState, ...userState };

    return callback(State);
};
