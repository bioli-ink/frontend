import { Button } from '@heroui/button';
import * as htmlToImage from 'html-to-image';
// import Image from 'next/image';
import { useRef, useState } from 'react';

import Logo from '@/app/components/logo';
import PageView from '@/app/components/page-view';
import Slogan from '@/app/components/slogan';
import { cls } from '@/app/utils/string';

import QRCode from '../qrcode';
import style from './mock-up.module.scss';
import { MockUpProps } from './types';

export default function MockUp(props: MockUpProps) {
  const [isLoading, setIsLoading] = useState(false);
  const renderRef = useRef<HTMLDivElement>(null);
  const onGenerateMockUp = () => {
    setIsLoading(true);

    htmlToImage.toJpeg(renderRef.current as HTMLDivElement)
      .then(function (dataUrl) {
        const link = document.createElement('a');

        link.download = `${props.username}.jpeg`;
        link.href = dataUrl;
        link.click();
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      });
  };

  return (
    <div className={style.wrapper}>
      <div className={style['content-left']}>
        <p className={style.title}>快将你的页面生成海报图分享给你的好友吧~</p>
        <Button
          isDisabled={isLoading}
          fullWidth
          radius='sm'
          color='primary'
          className={cls('btn-main-color', style['btn-generate-mockup'])}
          onPress={onGenerateMockUp}
        >生成并下载海报</Button>
      </div>
      <div className={style['content-right']} ref={renderRef}>
        <div className={cls('device-shell', style['page-view--wrapper'])}>
          <PageView {...props} scene='simulator' />
        </div>

        <div className={style['render-area--footer']}>
          <QRCode text={props.link} size={{ width: 70, height: 70 }} logoSize={20} />

          <div className={style['logo-with-slogan']}>
            <Logo />
            
            <div>
              <Slogan />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
