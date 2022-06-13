import styles from './PagePattern.module.scss';
import { Outlet } from 'react-router-dom';

export default function PagePattern () {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Gift Manager
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}