import Button from '~/components/Button';
import { useClock } from '~/hooks/use-clock';

function Clock() {
    const Date = useClock();
    const time = Date.toLocaleTimeString('vn-VN', { hour: '2-digit', minute: '2-digit' });
    return <Button type="transparent">{time}</Button>;
}
export default Clock;
