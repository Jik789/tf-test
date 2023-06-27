import styles from './SearchPanel.module.scss';
import search from '../../image/search.svg';
import { useAppDispatch } from '../../store/store';
import { inputWrite } from '../../store/features/inputNameSlice';

function SearchPanel() {
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputWrite(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.organizationsInput}
        type="text"
        placeholder="Поиск по организациям"
        onChange={handleInputChange}
      />
      <img className={styles.inputIcon} src={search} alt="search" />
    </div>
  );
}

export default SearchPanel;
