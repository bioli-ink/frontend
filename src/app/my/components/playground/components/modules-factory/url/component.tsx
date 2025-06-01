'use client'

import { useState } from 'react';

import AdvancedInput from '@/app/my/components/advanced-input';
import { ModuleType } from '@/app/types/my/module';

import { useUpdateModule } from '../../../hooks/use-update-module';
import ModuleTemplate from '../template';
import { URLProps } from './types';
import style from './url.module.scss';

export default function URL({
  index,
  ...item
}: URLProps) {
  const [hasLinkError, setHasLinkError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const updateModule = useUpdateModule({ index });

  return (
    <ModuleTemplate
      index={index}
      type={ModuleType.URL}
      coreContent={
        <div className={style['content-wrapper']}>
          <AdvancedInput
            inputProps={{
              placeholder: '标题',
              defaultValue: item.title,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onBlur: (event: any) => {
                updateModule('title', (event.target as HTMLInputElement).value);
              },
            }}
            className='main-title'
          />
          <AdvancedInput
            inputProps={{
              placeholder: '链接',
              defaultValue: item.url,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onBlur: (event: any) => {
                const value = (event.target as HTMLInputElement).value;
                const result = value.match(/^http(s)?:\/\/(.*)/);

                if (result) {
                  updateModule('url', (event.target as HTMLInputElement).value);
                } else {
                  setErrorMessage('链接不合法');
                  setHasLinkError(!Boolean(result));
                }
              }
            }}
          />
          {/* TODO 样式 */}
          {hasLinkError ? (
            <p className={style['illegal-url']}>{errorMessage}</p>
          ) : null}
        </div>
      }
    >
    </ModuleTemplate>
  )
}
