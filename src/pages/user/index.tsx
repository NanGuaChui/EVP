import classnames from 'classnames';
import { Content } from 'components';
import { useState } from 'react';
import Taro from '@tarojs/taro';
import { Button, Form, Input, Label, Textarea } from '@tarojs/components';
import styles from './index.module.scss';

const tabs = [{ title: '雕玉成才' }, { title: '赤诚惜才' }, { title: '礼贤悦才' }, { title: '海川纳才' }];
const contributed = [{ key: '2' }, { key: '1' }];

const User = () => {
  const [formValue, setFormValue] = useState({ type: 0, internOnly: false });

  const onEdit = () => {
    Taro.navigateTo({ url: '/pages/index/detail/index?type=1&source=user' });
  };

  return (
    <Content navType='overstory'>
      <div className={styles['user-info']}>
        <img className={styles['user-info-img']} src={require('assets/images/head_portrait.png')} alt='' />
        <div className={styles['desc']}>
          <p className={styles['desc-name']}>用户昵称用户昵称</p>
          <span className={styles['desc-status']}>已报名</span>
        </div>
      </div>
      <div className={styles['introduce']}>
        <h2 className={styles['introduce-title']}>活动介绍</h2>
        <p className={styles['introduce-desc']}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        <div className={styles['introduce-countdown']}>
          <div>距离活动结束还有</div>
          <div className={styles['introduce-countdown-time']}>61:03:39</div>
        </div>
      </div>
      <div className={styles['contributed']}>
        <div className={styles['contributed-title']}>已投稿作品</div>
        <div className={styles['contributed-list']}>
          {contributed.map(e => (
            <div className={styles['contributed-list-item']} key={e.key} onClick={onEdit}>
              <img className={styles['contributed-list-item-img']} src={require('assets/images/demo.png')} alt='' />
              <span className={styles['contributed-list-item-heart']}>120</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['new']}>
        <div className={styles['new-tabs']}>
          {tabs.map((e, index) => (
            <div
              key={index}
              onClick={() => setFormValue({ ...formValue, type: index })}
              className={classnames(styles['new-tabs-item'], formValue.type == index ? styles['active'] : '')}>
              {e.title}
            </div>
          ))}
        </div>

        <Form onSubmit={() => {}} onReset={() => {}}>
          <div className={styles['new-desc']}>
            <span>请选择要投稿的领域</span>
            <div
              onClick={() => setFormValue({ ...formValue, internOnly: !formValue.internOnly })}
              className={classnames(
                styles['new-desc-checkbox'],
                formValue.internOnly ? styles['new-desc-checkbox-active'] : ''
              )}>
              <i className={styles['new-desc-checkbox-dot']} />
              Intern Only
            </div>
          </div>
          <div>
            <Label className={styles['label']}>Headline</Label>
            <Input className={styles['input']} type='text' placeholder='请输入内容' maxlength={100} />
          </div>
          <div style={{ marginTop: Taro.pxTransform(10) }}>
            <Label className={styles['label']}>Lead text</Label>
            <Textarea className={styles['textarea']} autoHeight placeholder='请输入内容' maxlength={300} />
          </div>
          <div className={styles['btns']}>
            <Button type='primary' className={styles['btns-submit']}>
              Upload image/video
            </Button>
            <Button type='default' className={styles['btns-save']}>
              Save
            </Button>
          </div>
        </Form>
      </div>
      <br />
    </Content>
  );
};

export default User;
