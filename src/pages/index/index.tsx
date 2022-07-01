import Taro from '@tarojs/taro';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Content } from 'components';
import { fillTwoNum } from 'utils';
import styles from './index.module.scss';

var endTime = new Date('2022/08/01 12:00:00');
const Home = () => {
  const { t, i18n } = useTranslation();

  const timer = useRef<any>(null);
  const [time, setTime] = useState({ d: '99', h: '99', m: '99', s: '99' });
  const [languageDot, setLanguageDot] = useState('');

  useEffect(() => {
    timer.current = setInterval(() => {
      const now = new Date();
      var diff = Math.ceil((endTime.getTime() - now.getTime()) / 1000);
      var d = Math.floor(diff / 86400);
      diff -= d * 86400;
      var h = Math.floor(diff / 3600);
      diff -= h * 3600;
      var m = Math.floor(diff / 60);
      diff -= m * 60;
      var s = diff % 60;
      setTime({ d: fillTwoNum(d), h: fillTwoNum(h), m: fillTwoNum(m), s: fillTwoNum(s) });
    }, 500);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    setLanguageDot(Taro.pxTransform(i18n.language === 'zh' ? 8 : 94));
  }, [i18n.language]);

  const onChangeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const onDetail = type => {
    // 跳转到目的页面，在当前页面打开
    Taro.navigateTo({
      url: `/pages/index/list/index?type=${type}`,
    });
  };

  return (
    <Content showNav={false} navStyle={{ backgroundColor: '#5ad79d' }}>
      <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
        <div className={styles['logo']}>
          <img className={styles['logo-img']} src={require('assets/images/logo-white.png')} />
        </div>
        <div className={styles['banner']}>
          <div className={styles['banner-bg']}>
            <p>德育人才</p>
            <p style={{ textAlign: 'center' }}>勤创未来</p>
          </div>
          <div className={styles['language']}>
            <div className={styles['language-dot']} style={{ left: languageDot }}></div>
            <span
              onClick={() => onChangeLanguage('zh')}
              className={i18n.language === 'zh' ? styles['language-active'] : null}>
              中文
            </span>
            <span className={styles['language-vertical']}></span>
            <span
              onClick={() => onChangeLanguage('en')}
              className={i18n.language === 'en' ? styles['language-active'] : null}>
              EN
            </span>
          </div>
          <div className={styles['countdown']}>
            <div className={styles['countdown-title']}>{t('home.countdown')}</div>
            <div className={styles['countdown-time']}>
              <span className={styles['span']}>{time.d}</span>天<span className={styles['span']}>{time.h}</span>时
              <span className={styles['span']}>{time.m}</span>分<span className={styles['span']}>{time.s}</span>秒
            </div>
          </div>
        </div>

        <div className={styles['list']}>
          <div className={styles['item']} onClick={() => onDetail(1)}>
            <img className={styles['img']} src={require('assets/images/module-1.png')} alt='' />
            <div className={styles['text']}>立即进入&gt;</div>
          </div>
          <div className={styles['item']} onClick={() => onDetail(2)}>
            <img className={styles['img']} src={require('assets/images/module-2.png')} alt='' />
            <div className={styles['text']}>立即进入&gt;</div>
          </div>
          <div className={styles['item']} onClick={() => onDetail(3)}>
            <img className={styles['img']} src={require('assets/images/module-3.png')} alt='' />
            <div className={styles['text']}>立即进入&gt;</div>
          </div>
          <div className={styles['item']} onClick={() => onDetail(4)}>
            <img className={styles['img']} src={require('assets/images/module-4.png')} alt='' />
            <div className={styles['text']}>立即进入&gt;</div>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Home;
