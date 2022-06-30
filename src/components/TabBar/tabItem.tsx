import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const TabItem = ({ data }) => {
  const onClick = () => {
    if (data.onClick) {
      data.onClick();
    } else {
      Taro.navigateTo({ url: data.pagePath });
    }
  };
  return (
    <div className={styles['tab-item']} onClick={onClick}>
      <img className={styles['tab-item-icon']} src={data.iconPath} alt='' />
      <p className={styles['tab-item-text']}>{data.text}</p>
    </div>
  );
};

export default TabItem;
