import { useEffect, useState } from 'react';

export const useClock = () => {
    const [date, setDate] = useState(new Date());
    const refreshClock = () => {
        setDate(new Date());
    };
    useEffect(() => {
        const timerID = setInterval(refreshClock, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);
    return date;
};
