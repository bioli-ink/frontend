'use client';

import { Button } from '@heroui/button';
import Image from 'next/image';

import CommonLayout from '../common-layout';
import ModalAuth from '../modal-auth';
import Block from './components/block';
import { MORE_LIST, TODO_LIST } from './config';
import style from './not-found.module.scss';
import ImgNotFound from './not-found.svg';

export default function NotFound() {
  const onReload = () => {
    location.reload();
  };

  return (
    <CommonLayout>
      <div className={style['inner-wrapper']}>
        <Image
          src={ImgNotFound}
          alt='not-found'
          className={style['img-not-found']}
        />

        <div className={style.tips}>
          <p>出错啦！</p>
          <p>页面未找到/加载失败，请刷新重试</p>
        </div>

        <Button variant='ghost' color='primary' size='lg' onPress={onReload}>刷新</Button>

        <div className={style.reason}>
          <p className={style.title}>出错原因：</p>

          <ul>
            <li>您访问的页面的所有者(商家、大V...)修改了网址，每个人都可以用Bioli.ink制作一个聚合页</li>
            <li>链接错误，页面不存在</li>
            <li>您使用了网络代理，请关闭代理后刷新页面</li>
          </ul>
        </div>

        <Block
          title='接下来，你可以：'
          list={TODO_LIST}
        />

        <Block
          title='更多'
          list={MORE_LIST}
        />

        <div className={style.service}>
          <p className={style['sub-title']}>纠错、咨询、入群，扫一扫添加Bioli.ink 官方客服</p>

          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/official/custom-qrcode.jpg`}
            alt='qrcode'
            width={150}
            height={150}
            className={style['service-qrcode']}
          />
        </div>
      </div>

      <ModalAuth />
    </CommonLayout>
  );
}
