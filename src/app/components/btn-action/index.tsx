import { Button } from '@heroui/button';

import style from './btn-action.module.scss';
import { BtnActionProps } from './types';

/**
 * 操作按钮组组件
 */
export default function BtnAction({
  confirmText = '确定',
  cancelText = '取消',
  onConfirm,
  onCancel
}: BtnActionProps) {
  return (
    <div className={style.wrapper}>
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
  )
}
