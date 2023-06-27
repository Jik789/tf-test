import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

function Header() {
  return (
    <header className={styles.headerMainContainer}>
      <div className={styles.headerContainer}>
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
