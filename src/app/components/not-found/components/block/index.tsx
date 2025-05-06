import { Button } from '@heroui/button';

import style from './block.module.scss';
import { BlockProps } from './types';

export default function Block({
  title,
  list
}: BlockProps) {
  const onOptionClick = ({ wip, onClick }: { wip?: boolean; onClick: () => void }) => {
    if (wip) {
      location.href = '/wip';
    } else {
      onClick();
    }
  };

  return (
    <div className={style['options-block']}>
      <p className={style['sub-title']}>{title}</p>

      <div className={style['options-list']}>
        {
          list.map(item => (
            <Button
              fullWidth
              color='primary'
              key={item.key}
              onPress={() => {
                onOptionClick({
                  wip: item.wip,
                  onClick: item.onClick
              })}}
            >{item.label}</Button>
          ))
        }
      </div>
    </div>
  );
}
