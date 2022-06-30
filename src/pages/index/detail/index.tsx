import { Button, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Content } from 'components';
import styles from './index.module.scss';

const Detail = () => {
  const onTap = () => {
    Taro.navigateBack();
  };

  return (
    <Content showNav={false} className={styles['detail']} navStyle={{ backgroundColor: '#000' }}>
      <div className={styles['detail-works']}>
        <div className={styles['detail-works-desc']}>
          <span>雕玉成才</span>
          <Button
            className={styles['detail-works-desc-btn']}
            onClick={() => Taro.switchTab({ url: '/pages/user/index' })}>
            我要报名
          </Button>
        </div>
        <Image
          onClick={onTap}
          mode='widthFix'
          className={styles['detail-works-img']}
          src={require('assets/images/demo.png')}
        />
      </div>
      <div className={styles['detail-operate']}>
        <div className={styles['detail-btns']}>
          <Button className={styles['detail-btns-vote']} type='primary'>
            投票
          </Button>
          <Button className={styles['detail-btns-share']} type='default' openType='share'>
            <img
              className={styles['detail-btns-share-icon']}
              src={require('assets/images/riFill-share-circle-fill.png')}
              alt=''
            />
            分享
          </Button>
        </div>
      </div>
    </Content>
  );
};

export default Detail;
