import { Badge } from '@heroui/badge';

import Content from './content';
import style from './delete.module.scss';
import { DeleteProps } from './types';

export default function Delete({
  title,
  badgeSize = 'md',
  children,
  onConfirm,
}: DeleteProps) {
  return (
    <Badge
      isOneChar
      content={
        <Content title={title} onConfirm={onConfirm} triggerCls={badgeSize ? style[`icon-delete-${badgeSize}`] : ''} />
      }
      color='danger'
      shape='circle'
      size={badgeSize}
      className='icon-action'
    >
      {children}
    </Badge>
  )
}
