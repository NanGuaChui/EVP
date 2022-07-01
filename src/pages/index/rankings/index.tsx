import { Content } from 'components';
import {} from '@tarojs/components';
import { randomRange } from 'utils';
import styles from './index.module.scss';

console.log(styles);

const data = Array.from({ length: 20 }).map((e, index) => {
  let tickerAmount = randomRange(0, 10000);
  return { key: index, tickerAmount };
});

const Rankings = () => {
  const getSort = index => {
    if (index === 0) {
      return <img className={styles['img']} src={require('assets/images/winner-list-1.png')} alt='' />;
    } else if (index === 1) {
      return <img className={styles['img']} src={require('assets/images/winner-list-2.png')} alt='' />;
    } else if (index === 2) {
      return <img className={styles['img']} src={require('assets/images/winner-list-3.png')} alt='' />;
    }

    return <span className={styles['serial']}>{index + 1}</span>;
  };

  return (
    <Content showTabBar className={styles['rankings']}>
      <div className={styles['platform']}>
        <div className={styles['runner-up']}>
          <div className={styles['picture-frame']}>
            <img className={styles['heat-img']} src={require('assets/images/av.png')} alt='' />
            <span className={styles['ticker-num']}>20000</span>
          </div>
        </div>
        <div className={styles['champion']}>
          <div className={styles['picture-frame']}>
            <img className={styles['heat-img']} src={require('assets/images/av.png')} alt='' />
            <span className={styles['ticker-num']}>23123</span>
          </div>
        </div>
        <div className={styles['third']}>
          <div className={styles['picture-frame']}>
            <img className={styles['heat-img']} src={require('assets/images/av.png')} alt='' />
            <span className={styles['ticker-num']}>124214</span>
          </div>
        </div>
      </div>
      <div className={styles['list']}>
        <div className={styles['table']}>
          <div className={styles['head']}>
            <span className={styles['table-th']}>排名</span>
            <span className={styles['table-th']}>姓名</span>
            <span className={styles['table-th']}>累积得票</span>
          </div>
          {data.map((e, index) => (
            <div className={styles['body']} key={e.key}>
              <span className={styles['table-td']}>{getSort(index)}</span>
              <span className={styles['table-td']}>
                <img className={styles['av']} src={require('assets/images/av.png')} alt='' />
                用户昵称
              </span>
              <span className={styles['table-td']}>{e.tickerAmount}</span>
            </div>
          ))}
        </div>
      </div>
      <br />
    </Content>
  );
};

export default Rankings;
