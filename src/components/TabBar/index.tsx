import Taro from '@tarojs/taro';
import TabItem from './tabItem';
import styles from './index.module.scss';

const data = {
  default: [
    {
      text: '返回首页',
      iconPath: require('assets/images/back-home.png'),
      selectedIconPath: require('assets/images/home_selected.png'),
      pagePath: '/pages/index/index',
      onClick: () => Taro.navigateBack(),
    },
    {
      text: '活动排名',
      iconPath: require('assets/images/iconPark-crown-three.png'),
      selectedIconPath: require('assets/images/user_selected.png'),
      pagePath: '/pages/index/rankings/index',
    },
    {
      text: '我的',
      iconPath: require('assets/images/user.png'),
      selectedIconPath: require('assets/images/user_selected.png'),
      pagePath: '/pages/user/index',
      onClick: () => Taro.switchTab({ url: '/pages/user/index' }),
    },
  ],
};
const Content = ({ tabType = 'default' }) => {
  return (
    <>
      <div className={styles['tabBar-space']}></div>
      <div className={styles['tabBar']}>
        {data[tabType].map(e => (
          <TabItem key={e.text} data={e} />
        ))}
      </div>
    </>
  );
};

export default Content;
