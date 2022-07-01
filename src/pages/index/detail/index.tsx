import { Button, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import { Content } from 'components';
import { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';

const Detail = () => {
  const [pageType, setPageType] = useState(0);
  // 页面来源 list:列表 user:用户中心
  const [source, setSource] = useState('list');

  const onTap = () => {
    Taro.navigateBack();
  };

  const btnList = useMemo(() => {
    if (source === 'list') {
      return (
        <>
          <Button className={styles['detail-btns-vote']} type='primary'>
            <img className={styles['detail-btns-share-icon']} src={require('assets/images/fill-heart.svg')} alt='' />
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
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  }, [source]);

  useEffect(() => {
    const params = Taro.getCurrentInstance().router?.params;
    if (params) {
      setPageType(Number(params.type));
      setSource(params.source || 'list');
    }
  }, []);

  return (
    <Content showNav={false} className={styles['detail']} navStyle={{ backgroundColor: '#000' }}>
      <div className={styles['detail-works']}>
        <div className={classnames(styles['detail-works-desc'], styles[`type-${pageType}`])}>
          {source === 'list' && (
            <Button
              className={styles['detail-works-desc-btn']}
              onClick={() => Taro.switchTab({ url: '/pages/user/index' })}>
              我要报名
            </Button>
          )}
        </div>
        <div className={styles['detail-works-main']}>
          <div className={styles['detail-works-ticker']}>
            <p style={{ color: '#02C261' }}>123447</p>
            <p style={{ fontSize: Taro.pxTransform(14) }}>目前得票</p>
          </div>
          <Image
            onClick={onTap}
            mode='widthFix'
            className={styles['detail-works-img']}
            src={require('assets/images/demo.png')}
          />
        </div>
      </div>
      <div className={styles['detail-operate']}>
        <div className={styles['detail-btns']}>{btnList}</div>
      </div>
    </Content>
  );
};

export default Detail;
