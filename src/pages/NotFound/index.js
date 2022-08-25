import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';


function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Page not found</h1>
            <p className={styles.content}>
                Sorry
                <span role="img" aria-label="Pensive emoji">
                    😔
                </span>
                we couldn't find what you were looking for.
            </p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default NotFound;
