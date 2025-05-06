import { cls } from '@/app/utils/string';

import style from './loading.module.scss';
import { LoadingProps } from './types';

export default function Loading({
  size = 30,
  color = 'var(--main-color)',
}: LoadingProps) {
  return (
    <div className={style.wrapper}>
      <i
        className={cls(
          'iconfont-common',
          'icon-common-loading',
          style['icon-loading']
        )}
        style={{
          ...(size ? {
            width: `${size}px`,
            height: `${size}px`,
            fontSize: `${size}px`,
          } : {}),
          ...(color ? { color } : {})
        }}
      ></i>
    </div>
  )
}
