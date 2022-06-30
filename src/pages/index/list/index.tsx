import Taro from '@tarojs/taro';
import { Content } from 'components';
import { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';

const data = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }];

const List = () => {
  const [pageType, setPageType] = useState(0);

  const onDetail = () => {
    Taro.navigateTo({ url: '/pages/index/detail/index' });
  };

  useEffect(() => {
    const params = Taro.getCurrentInstance().router?.params;
    if (params) {
      setPageType(Number(params.type));
    }
  }, []);

  const bg = useMemo(() => {
    const config = {
      1: require('assets/images/detail-top-bg-1.png'),
      2: require('assets/images/detail-top-bg-2.png'),
      3: require('assets/images/detail-top-bg-3.png'),
      4: require('assets/images/detail-top-bg-4.png'),
    };
    return config[pageType] && `url(${config[pageType]})`;
  }, [pageType]);

  return (
    <Content showTabBar>
      <div className={styles['desc']} style={{ backgroundImage: bg }}>
        <div className={styles['desc-bg']}>
          巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉
        </div>
      </div>
      <div className={styles['list']}>
        {data.map(e => (
          <div className={styles['list-item']} key={e.key} onClick={onDetail}>
            <img className={styles['list-item-img']} src={require('assets/images/demo.png')} />
            <div className={styles['list-item-meta']}>
              <p className={styles['list-item-title']}>222222222222222222222222222222222222222</p>
              <div className={styles['list-item-heart']}>123</div>
            </div>
          </div>
        ))}
      </div>
    </Content>
  );
};

export default List;
