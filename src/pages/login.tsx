import { Content } from 'components';
import classnames from 'classnames';
import { Button, Form, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { delay } from 'utils';
import styles from './login.module.scss';

const Login = () => {
  const onWechatLogin = async res => {
    const userInfo = res?.detail?.userInfo;
    console.log(`userInfo----------------${userInfo}`);
    if (userInfo) {
      Taro.showToast({ title: userInfo.nickName });
      await delay(2000);
      Taro.switchTab({ url: '/pages/index/index' });
    } else {
      Taro.showToast({ title: '获取用户信息失败' });
    }
  };

  const onDeloitteLogin = async () => {
    Taro.showToast({ title: '登陆成功' });
    await delay(2000);
    Taro.switchTab({ url: '/pages/index/index' });
  };

  return (
    <Content navType='overstory' navColor='black' style={{ background: '#000' }}>
      <div className={styles['login']}>
        <div className={styles['form']}>
          <Form>
            <h2 className={styles['title']}>德勤用户</h2>
            <Input placeholder='账号' className={styles['input']} />
            <Input placeholder='密码' className={styles['input']} />
            <Button className={styles['button']} type='primary' onClick={onDeloitteLogin}>
              登录
            </Button>
            <div className={classnames(styles['terms'], styles['active'])}>
              <i className={styles['checkbox']} />
              同意并阅读以下条款<span className={styles['text']}>《服务条款》</span>
            </div>
          </Form>
        </div>
      </div>
      <div className={styles['other-login']}>
        <div className={styles['title']}>使用其他方式</div>
        <Button openType='getUserInfo' className={styles['wechat']} onGetUserInfo={onWechatLogin}>
          <img className={styles['img']} src={require('assets/images/wechat.svg')} alt='' />
          微信
        </Button>
      </div>
    </Content>
  );
};

export default Login;
