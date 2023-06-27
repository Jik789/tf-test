import styles from './HeaderLogo.module.scss';
import headerLogo from '../../../image/logo.svg';
import { Link } from 'react-router-dom';

function HeaderLogo() {
  return (
    <Link to="/" className={styles.headerLogoConteiner}>
      <img src={headerLogo} alt="logo" />
      <h1 className={styles.headerLogoName}>B2B CLOUD</h1>
    </Link>
  );
}

export default HeaderLogo;
