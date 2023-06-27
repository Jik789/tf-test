import CardList from '../../components/CardList/CardList';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <>
      <div className={styles.container}>
        <SearchPanel />
        <CardList />
      </div>
    </>
  );
}

export default MainPage;
