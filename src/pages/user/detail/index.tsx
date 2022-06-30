import { Button, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Content } from 'components';
import styles from './index.module.scss';

const Detail = () => {
  return (
    <Content showNav className={styles['detail']}>
      <div className={styles['detail-works']}>
        <div className={styles['detail-works-desc']}>
          <span>雕玉成才</span>
        </div>
        <Image mode='widthFix' className={styles['detail-works-img']} src={require('assets/images/demo2.png')} />
        <div style={{ margin: Taro.pxTransform(10) }}>
          <div>123123123</div>
          <p>3213123123</p>
          <p>3213123123</p>
        </div>
      </div>
      <div className={styles['detail-operate']}>
        <div className={styles['detail-btns']}>
          <Button className={styles['detail-btns-del']} type='warn'>
            删除作品
          </Button>
          <Button className={styles['detail-btns-edit']} type='primary'>
            修改作品
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
