import style from './row-item.module.scss';
import { RowItemProps } from './types';

export default function RowItem({
  title,
  content,
}: RowItemProps) {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>{title}</p>

      <div className={style.content}>
        {content}
      </div>
    </div>
  )
}
