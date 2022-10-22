import useStore from './useStore';

export const useSelector = (callback) => {
    const { session } = useStore();
    const [sessionState] = session;

    // merge state
    const State = { ...sessionState };

    return callback(State);
};
