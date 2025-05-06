/**
 * 除了首页、/my 之外的页面的通用 wrapper
 */

import { cls } from '@/app/utils/string';

import style from './common-layout.module.scss';
import { CommonLayoutProps } from './types';

export default function CommonLayout({
  maxWidth = 600,
  children
}: CommonLayoutProps) {
  return (
    <div className={style.wrapper}>
      <main className={cls(style['main-content'], `max-w-[${maxWidth}px]`)}>
        {children}
      </main>
    </div>
  )
}
