/**
 * 先做一个简单的对话框组件，调用时需要配合 Modal 组件
 */

import { Button } from '@heroui/button';

import style from './confirm.module.scss';
import { DialogConfirmProps } from './types';

export default function DialogConfirm({
  title,
  content,
  confirmText = '确认',
  cancelText = '取消',
  onConfirm,
  onCancel
}: DialogConfirmProps) {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>{title}</p>

      <p className={style.content}>{content}</p>

      <div className={style.action}>
        <Button
          variant='bordered'
          size='sm'
          onPress={onCancel}
        >{cancelText}</Button>

        <Button
          size='sm'
          className='btn-main-color'
          onPress={onConfirm}
        >{confirmText}</Button>
      </div>
    </div>
  )
}
