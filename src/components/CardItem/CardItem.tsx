import styles from './CardItem.module.scss';
import { Link } from 'react-router-dom';
import { IData } from '../../utils/interfaces';
import blankImage from '../../image/blankImage.png';

interface IRepoItemProps {
  item: IData;
  inList: boolean;
}

function CardItem({ item, inList }: IRepoItemProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemMainInfo}>
        <div className={styles.orgInfoContainer}>
          <img className={styles.itemLogo} src={item.image ? item.image : blankImage}></img>
          <div className={styles.itemNameAdress}>
            <h3 className={styles.itemName}>{item.title}</h3>
            <p className={styles.itemAdress}>Россия, г. Иннополис, ул. Университетская 1</p>
          </div>
        </div>
        <ul className={styles.itemTagList}>
          {/* //Вот тут по хорошему должен быть цикл с отрисовкой тегов, но в тестовом это не целесообразно */}
          <li className={styles.itemTagInfoGroupOne}>IT</li>
          <li className={styles.itemTagInfoGroupTwo}>Образование</li>
        </ul>
      </div>
      <p>{item.description}</p>
      <ul className={styles.itemSkillList}>
        {/* //Вот тут по хорошему должен быть цикл с отрисовкой тегов, но в тестовом это не целесообразно */}
        <li className={styles.itemSkillInfo}>Разработка мобильных приложений</li>
        <li className={styles.itemSkillInfo}>Тестирование</li>
        <li className={styles.itemSkillInfo}>Разработка игр</li>
        <li className={styles.itemSkillInfo}>Комплексные решения</li>
        <li className={styles.itemSkillInfo}>Разработка сайтов</li>
        <li className={styles.itemSkillInfo}>+5</li>
      </ul>
      {inList ? (
        <Link className={styles.buttonCard} to={`/item/${item.id}`}>
          Подробнее
        </Link>
      ) : (
        <Link to="/" className={styles.goBackButton}>
          Назад
        </Link>
      )}
    </div>
  );
}

export default CardItem;
