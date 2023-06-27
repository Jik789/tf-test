import { Link } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

function HeaderNavigation() {
  return (
    <nav className={styles.headerNavigationContainer}>
      <ul className={styles.headerNavigationList}>
        <li>
          <Link to="/">Специалисты</Link>
        </li>
        <li>
          <Link to="/">Потребности</Link>
        </li>
        <li>
          <Link to="/">Аналитика</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
