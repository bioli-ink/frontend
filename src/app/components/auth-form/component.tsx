'use client'

import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import useCountDown from 'ahooks/lib/useCountDown';
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';
import { prezero } from '@/app/utils/number';
import { cls } from '@/app/utils/string';
import { parseSearch } from '@/app/utils/url';

import style from './auth-form.module.scss';
import { useLogin } from './hooks/use-login';
import { useVerifyCode } from './hooks/use-verify-code';

export default function AuthForm() {
  const [mobile, setMobile] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);
  const [isVerifyCodeInvalid, setIsVerifyCodeInvalid] = useState(false);
  const [verifyCodeDisabled, setVerifyCodeDisabled] = useState(false);

  const [targetDate, setTargetDate] = useState<number>();
  const [, countdownResp] = useCountDown({
    targetDate,
    onEnd: () => {
      setVerifyCodeDisabled(false);
    },
  });

  const onLoginSuccess = () => {
    const search = parseSearch();

    if (search.redirect) {
      location.replace(decodeURIComponent(search.redirect))
    } else {
      location.replace('/my');
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const { runAsync: runVerifyCode, loading: loadingVerifyCode } = useVerifyCode();
  const { runAsync: runLogin } = useLogin({ onSuccess: onLoginSuccess });

  const getVerifyCode = () => {
    if (loadingVerifyCode) return;

    if (!mobile) {
      setIsPhoneInvalid(true);
      return;
    }

    runVerifyCode({ mobile })
      .then(() => {
        event.emit(EVENTS.SHOW_ALERT, {
          text: '验证码已发送，请查收',
          color: 'success',
        });
        setTargetDate(Date.now() + 60 * 1000);
        setVerifyCodeDisabled(true);
      })
  }

  const onSubmit = () => {
    let hasInvalid = false;

    if (!mobile) {
      setIsPhoneInvalid(true);
      hasInvalid = true;
    }

    if (!verifyCode) {
      setIsVerifyCodeInvalid(true);
      hasInvalid = true;
    }

    if (hasInvalid) {
      return;
    }

    setIsLoading(true);

    runLogin({
      mobile,
      verifyCode
    })
      .then(() => {
        event.emit(EVENTS.SHOW_ALERT, {
          text: '登录成功！',
          color: 'success',
        });
        setTimeout(() => {
          location.href = '/my'
        }, 2000);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className={style.wrapper}>
      <section className={style.upper}>
        <h1 className={style.title}>欢迎回来!</h1>

        <h4 className={style['sub-title']}>登录 bioli.ink，连接你的所有链接</h4>

        <div className={style['form-wrapper']}>
          <Input
            variant='underlined'
            placeholder='输入手机号'
            type='text'
            value={mobile}
            onValueChange={(value: string) => {
              setMobile(value);
              setIsPhoneInvalid(false);
            }}
            isInvalid={isPhoneInvalid}
            errorMessage='请填写正确的手机号'
          />
          <Input
            variant='underlined'
            placeholder='输入验证码'
            type='text'
            value={verifyCode}
            onValueChange={(value: string) => {
              setVerifyCode(value);
              setIsVerifyCodeInvalid(false);
            }}
            endContent={
              <Button
                size='sm'
                className='btn-main-color'
                isLoading={loadingVerifyCode}
                isDisabled={verifyCodeDisabled}
                onPress={getVerifyCode}
              >{verifyCodeDisabled ? `${prezero(countdownResp.seconds)}秒` : '获取验证码'}</Button>
            }
            isInvalid={isVerifyCodeInvalid}
            errorMessage='请填写正确的验证码'
          />
        </div>

        <Button
          fullWidth
          className={cls('btn-main-color', style['btn-submit'])}
          onPress={onSubmit}
          isLoading={isLoading}
          isDisabled={isLoading}
        >登录</Button>
      </section>

      <p className={style.lower}>新用户可直接登录</p>
    </main>
  );
}
