import styles from './CardList.module.scss';
import CardItem from '../CardItem/CardItem';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { fetchAllItems } from '../../store/actions/actions';
import { useDebounce } from '../../hooks/useDebounce';
import { searchItems } from '../../store/features/allItemsSlice';

function CardList() {
  const allItems = useAppSelector((state) => state.allItems);
  const inputSelector = useAppSelector((state) => state.inputName);
  const timeoutInput = useDebounce(inputSelector.inputName, 1000);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchItems(timeoutInput));
  }, [dispatch, timeoutInput]);

  return (
    <div className={styles.listContainer}>
      {allItems.loading ? (
        <Loader />
      ) : (
        <>
          {timeoutInput !== '' && allItems?.items.length === 0 ? (
            <p className={styles.noResultsText}>Нет результатов поиска</p>
          ) : (
            <>
              {allItems.items.map((item) => (
                <CardItem item={item} inList={true} key={item.id} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default CardList;
