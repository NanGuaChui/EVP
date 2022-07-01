import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const Nav = ({ show, type, color, style }) => {
  const [topBarHeight, setTopBarHeight] = useState('0');

  const onBack = () => {
    Taro.navigateBack();
  };

  useEffect(() => {
    const { statusBarHeight = 0 } = Taro.getWindowInfo();
    setTopBarHeight(Taro.pxTransform(statusBarHeight));
  }, []);
  console.log(color)

  return (
    <div style={{ backgroundColor: color === 'white' ? '#f5f5f5' : '#000', paddingTop: topBarHeight, ...style }}>
      {show && (
        <div className={classnames(styles[type], styles['nav'])} onClick={onBack}>
          {color === 'white' && <img className={styles['nav-logo']} src={require('assets/images/logo.png')} alt='' />}
          {color === 'black' && (
            <img className={styles['nav-logo']} src={require('assets/images/logo-white.png')} alt='' />
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
