import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.navigationMainContainer}>
      <div className={styles.navigationContainer}>
        <select className={styles.navigationDropDawn}>
          <option value="volvo">Как это работает?</option>
        </select>
        <select className={styles.navigationDropDawn}>
          <option value="volvo">Партнерская сеть</option>
        </select>
        <select className={styles.navigationDropDawn}>
          <option value="volvo">Справочник</option>
        </select>
        <select className={styles.navigationDropDawn}>
          <option value="volvo">О нас</option>
        </select>
      </div>
    </div>
  );
}

export default Navigation;
