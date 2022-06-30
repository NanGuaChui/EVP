import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const Nav = ({ show, type, style }) => {
  const [topBarHeight, setTopBarHeight] = useState('0');

  const onBack = () => {
    Taro.navigateBack();
  };

  useEffect(() => {
    const { statusBarHeight = 0 } = Taro.getWindowInfo();
    setTopBarHeight(Taro.pxTransform(statusBarHeight));
  }, []);

  return (
    <div style={{ backgroundColor: '#f5f5f5', paddingTop: topBarHeight, ...style }}>
      {show && (
        <div className={classnames(styles[type], styles['nav'])} onClick={onBack}>
          <img className={styles['nav-logo']} src={require('assets/images/logo.png')} alt='' />
        </div>
      )}
    </div>
  );
};

export default Nav;
