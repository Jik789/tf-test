import styles from './HeaderMenu.module.scss';
import chat from '../../../image/chat.svg';
import alert from '../../../image/alert.svg';
import logout from '../../../image/logout.svg';
import setting from '../../../image/setting.svg';
import { Avatar } from 'antd';
import { Link } from 'react-router-dom';

function HeaderMenu() {
  return (
    <div className={styles.headerMenuContainer}>
      <div className={styles.userInfoContainer}>
        <div className={styles.headerMenuInfoText}>
          <p className={styles.headerMenuInfoUserName}>Мехман</p>
          <p>АО Россельхозбанк</p>
        </div>
        <Link to="/">
          <Avatar className={styles.headerMenuAvatar} shape="square">
            M
          </Avatar>
        </Link>
      </div>
      <div className={styles.userOptionContainer}>
        <Link to="/">
          <img src={setting} className={styles.headerMenuSettingIcon} alt="setting" />
        </Link>
        <Link to="/">
          <img src={alert} className={styles.headerMenuSettingIcon} alt="alert" />
        </Link>
        <Link to="/">
          <img src={chat} className={styles.headerMenuSettingIcon} alt="chat" />
        </Link>
        <Link to="/">
          <img src={logout} className={styles.headerMenuSettingIcon} alt="logout" />
        </Link>
      </div>
    </div>
  );
}

export default HeaderMenu;
