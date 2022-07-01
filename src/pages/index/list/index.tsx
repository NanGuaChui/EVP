import Taro from '@tarojs/taro';
import { Content } from 'components';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const data = [{ key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }];

const List = () => {
  const [pageType, setPageType] = useState(0);

  const onDetail = () => {
    Taro.navigateTo({ url: `/pages/index/detail/index?type=${pageType}` });
  };

  useEffect(() => {
    const params = Taro.getCurrentInstance().router?.params;
    if (params) {
      setPageType(Number(params.type));
    }
  }, []);

  return (
    <Content showTabBar>
      <div className={classnames(styles['desc'], styles[`desc-type-${pageType}`])}>
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
      <div className={styles['d-buzz']}>德勤出版物《勤报圈D.BUZZ》</div>
      <div className={styles['info']}>
        <span>微信公众号：德勤招聘</span>
        <span>小D勤报局</span>
      </div>
    </Content>
  );
};

export default List;
