import { Avatar } from '@heroui/avatar';
import { Button } from '@heroui/button';
import {Popover, PopoverContent,PopoverTrigger} from '@heroui/popover';
import { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { useUserBaseInfo } from '@/app/hooks/api/use-user-base-info';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { cls } from '@/app/utils/string';
import { addTsAfterUrl } from '@/app/utils/url';

import More from './components/more';
import style from './user.module.scss';

export default function UserEntry() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useUserBaseInfo();

  useEventListener(EVENTS.UPDATE_USER_MORE, setIsOpen);

  return (
    <Popover
      placement='top-start'
      crossOffset={30}
      isOpen={isOpen}
      onOpenChange={(open: boolean) => setIsOpen(open)}
    >
      <PopoverTrigger>
        <Button
          radius='full'
          className={cls(style.trigger, 'hover-bg')}
        >
          <Avatar src={addTsAfterUrl(data?.avatar)} />

          <span className={style.username}>@{data?.name || data?.username}</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className={style.content}>
          <div className={style.user}>
            <Avatar src={data?.avatar} />

            <div>
              <p className={style['info-name']}>@{data?.name || data?.username}</p>
              <p className={style['info-link']}>bioli.ink/{data?.username}</p>
              {/* TODO 用户的付费等级 */}
              {/* <Button>Free</Button> */}
            </div>
          </div>

          <Button size='lg' radius='full' variant='ghost' isDisabled>创建新账户</Button>

          <More />
        </div>
      </PopoverContent>
    </Popover>
  );
}
