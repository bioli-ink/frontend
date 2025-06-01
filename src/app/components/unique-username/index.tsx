import { Button } from '@heroui/button';
import {Divider} from '@heroui/divider';
import { Input } from '@heroui/input';
import { useMemo, useState } from 'react';

import { useUpdateUser } from '@/app/hooks/api/use-update-user';
import { cls } from '@/app/utils/string';

import style from './unique-username.module.scss';

export default function UniqueUsername() {
  const [username, setUsername] = useState('');
  const alphabetNumberValid = useMemo(() => username.match(/[a-z0-9-_]+(.*)/), [username]);
  const startWithAlphabetValid = useMemo(() => username.match(/^[a-z](.*)/), [username]);
  const lengthValid = useMemo(() => username.length >= 4, [username]);

  const { run } = useUpdateUser();

  const onUsernameChange = (newValue: string) => {
    if (newValue.match(/^[a-z0-9-_]+$/) || newValue === '') {
      setUsername(newValue);
    }
  };

  const onSubmit = () => {
    if (username.match(/^[a-z][a-z0-9-_]{3,}$/)) {
      run({ username });
    }
  }

  return (
    <div>
      <Input
        label='用户名'
        description={`我的永久链接：bioli.ink/${username || 'username'}`}
        value={username}
        onValueChange={onUsernameChange}
        maxLength={50}
        endContent={<p className={style.count}>{username.length}/50</p>}
      />

      <Divider className='my-4' />

      <div className={style['username-tips']}>
        <p>用户名全局唯一，并且不能修改，格式需满足：</p>

        <p className={style['validate-row']}>
          <span className={cls(style.dot, alphabetNumberValid ? style.valid : '')}></span>
          <span>由小写字母、数字、中横线(-)和下划线(_)组成</span>
        </p>

        <p className={style['validate-row']}>
          <span className={cls(style.dot, startWithAlphabetValid ? style.valid : '')}></span>
          <span>必须以字母开头</span>
        </p>

        <p className={style['validate-row']}>
          <span className={cls(style.dot, lengthValid ? style.valid : '')}></span>
          <span>至少 4 位</span>
        </p>
      </div>

      <Button
        fullWidth
        color='primary'
        className='mt-[10px] btn-main-color'
        onPress={onSubmit}
        isDisabled={
          !(
            alphabetNumberValid &&
            startWithAlphabetValid &&
            lengthValid
          )
        }
      >确定</Button>
    </div>
  )
};
