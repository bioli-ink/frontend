'use client';

import { Button } from '@heroui/button';
import { useMemo } from 'react';

import { EVENTS } from '@/app/constant/events';
import { useLoginStatus } from '@/app/hooks/use-login-status';
import event from '@/app/utils/event';

import { AuthBtnProps } from './types';

export default function AuthBtn(props?: AuthBtnProps) {
  const isLogin = useLoginStatus();
  const text = useMemo(() => {
    if (props?.btnText) return props.btnText;

    return isLogin ? '去主页' : '登录';
  }, [props?.btnText, isLogin]);
  const onOpenModalAuth = () => {
    if (isLogin) {
      location.href = '/my';
    } else {
      event.emit(EVENTS.UPDATE_MODAL_AUTH, { show: true });
    }
  };

  return (
    <Button
      radius='full'
      size='lg'
      className='btn-main-color'
      onPress={onOpenModalAuth}
      {...props?.btnProps}
    >
      {text}
    </Button>
  )
}
