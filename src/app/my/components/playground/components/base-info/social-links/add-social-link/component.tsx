import { Input } from '@heroui/input';
import { useEffect, useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { PLATFORM_LIST_WITH_PRIORITY } from '@/app/constant/list/social-links';
import { PLATFORM_TEXT } from '@/app/constant/list/social-links/platform';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './add-social-link.module.scss';

export default function AddSocialLink() {
  const [search, setSearch] = useState('');
  const [renderList, setRenderList] = useState(PLATFORM_LIST_WITH_PRIORITY);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (search === '') {
      setRenderList(PLATFORM_LIST_WITH_PRIORITY);
    } else {
      setRenderList(PLATFORM_LIST_WITH_PRIORITY.filter(
        link => link.id.includes(search) || PLATFORM_TEXT[link.id].includes(search)
      ));
    }
  }, [search]);

  return (
    <div className={style.wrapper}>
      <div className={style['search-wrapper']}>
        <Input
          variant='bordered'
          label='搜索'
          classNames={{
            inputWrapper: 'pl-[40px] bg-[var(--light-background)]'
          }}
          value={search}
          onChange={onSearchChange}
        />
        <i className={cls('iconfont-my icon-my-search', style['icon-search'])}></i>
      </div>

      <div className={style['social-link-list']}>
        {
          renderList.map(link => (
            <div key={link.id} className={cls(style['social-link-item'], 'hover-bg')}
              onClick={() => { event.emit(EVENTS.SHOW_MODAL_SOCIAL_LINK_ICON, link) }}
            >
              <div className={style['social-link-info']}>
                <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['icon-platform'])}></i>

                <span className={style['social-link-name']}>{PLATFORM_TEXT[link.id]}</span>
              </div>

              <i className={cls('iconfont-my icon-my-arrow', style['icon-action'])}></i>
            </div>
          ))
        }
      </div>
    </div>
  );
}
