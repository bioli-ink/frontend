import { Avatar } from '@heroui/avatar';
import { Button } from '@heroui/button';
import Clipboard from 'clipboard';
import { useEffect, useRef } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';

import style from './share.module.scss';
import { ShareProps } from './types';

export default function Share({
  avatar,
  link,
}: ShareProps) {
  const clipboardRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!clipboardRef.current || !ref.current) return;

    const clipboard = new Clipboard('#copyLink', {
      container: ref.current,
      text: () => {
        return link;
      },
    });

    clipboard.on('success', () => {
      event.emit(EVENTS.SHOW_ALERT, {
        text: '复制成功',
        color: 'success',
      });
    });

    clipboard.on('error', () => {
      event.emit(EVENTS.SHOW_ALERT, {
        text: '复制失败',
        color: 'danger',
      });
    });

    return () => {
      clipboard?.destroy();
    };
  }, [clipboardRef, ref, link]);

  const onQRCode = () => {
    event.emit(EVENTS.SHOW_QR_CODE);
  };

  const onGenerateMockup = () => {
    event.emit(EVENTS.SHOW_MOCK_UP);
  };

  return (
    <div className={style.wrapper} ref={ref}>
      <Avatar
        radius='full'
        size='lg'
        className={style['share-avatar']}
        src={avatar}
      />

      <Button
        fullWidth
        radius='sm'
        className='btn-main-color'
        onPress={onGenerateMockup}
      >生成海报</Button>

      <Button
        fullWidth
        radius='sm'
        className='btn-main-color'
        onPress={onQRCode}
      >查看二维码</Button>

      <Button
        ref={clipboardRef}
        fullWidth
        radius='sm'
        className='btn-main-color'
        id='copyLink'
      >复制链接</Button>
    </div>
  )
}
