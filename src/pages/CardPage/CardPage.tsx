import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Loader from '../../components/Loader/Loader';
import styles from './CardPage.module.scss';
import CardItem from '../../components/CardItem/CardItem';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchItem } from '../../store/actions/actions';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const CardPage = () => {
  const { item } = useParams();
  const dispatch = useAppDispatch();
  const element = useAppSelector((state) => state.oneItem);

  useEffect(() => {
    const fetchData = async () => {
      item ? dispatch(fetchItem(item)) : dispatch(fetchItem(null));
    };
    fetchData();
  }, [dispatch, item]);

  return (
    <>
      {element.error ? (
        <NotFoundPage />
      ) : (
        <div className={styles.card}>
          {element.item ? <CardItem item={element.item} inList={false} /> : <Loader />}
        </div>
      )}
    </>
  );
};

export default CardPage;
