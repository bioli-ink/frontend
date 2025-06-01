'use client';

import { Button } from '@heroui/button';
import Image from 'next/image';

import CommonLayout from '../components/common-layout';
import style from './wip.module.scss';
import IMG_WIP from './wip.svg';

export default function WIP() {
  return (
    <CommonLayout
      maxWidth={500}
    >
      <div className={style['inner-wrapper']}>
        <Image
          alt='wip'
          className={style['banner']}
          src={IMG_WIP}
        />

        <p>页面正在开发中，请随时关注官方通知~</p>

        <Button color='primary' size='lg' onPress={() => { location.href = '/' }}>返回首页</Button>
      </div>
    </CommonLayout>
  );
}
