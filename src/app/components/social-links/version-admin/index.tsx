'use client'

import '@/app/assets/icon/social-link/iconfont.css';

import { Link } from '@heroui/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PLATFORM_TEXT } from '@/app/constant/list/social-links/platform';
import { useUpdateUserConfig } from '@/app/my/hooks/use-update-user-config';
import { RootState } from '@/app/my/redux';
import { updateSocialLinks } from '@/app/my/redux/my';
import { SocialLink } from '@/app/types/my';
import { cls } from '@/app/utils/string';

import Delete from '../../delete';
import style from './social-links.module.scss';
import { SocialLinksProps } from './types';

export default function SocialLinks({
  links,
  className = '',
  onClick,
}: SocialLinksProps) {
  const [renderList, setRenderList] = useState<SocialLink[]>([]);
  const { socialLinks } = useSelector((state: RootState) => state.my);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!links.length) {
      setRenderList([]);
    } else {
      setRenderList(links);
    }
  }, [links]);

  const { runAsync: runUpdateUserConfig } = useUpdateUserConfig();
  const onDeleteSocialLink = (index: number) => {
    const copy = [...socialLinks];

    copy.splice(index, 1);
    runUpdateUserConfig({
      platform: JSON.stringify(copy),
    }).then(() => {
      dispatch(updateSocialLinks(copy));
    });
  };

  return (
    <div className={cls(style.wrapper, className)}>
      {
        renderList.length ? renderList.map((link, index) => (
          links.length ? (
            <Delete
              key={link.key}
              title={`确定删除${PLATFORM_TEXT[link.id]}？`}
              badgeSize='sm'
              onConfirm={() => onDeleteSocialLink(index)}
            >
              <Link
                className={style['social-link']}
                color='foreground'
                onPress={() => onClick?.({ item: link, index })}
              >
                <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['social-link_icon'], 'icon-action')}></i>

                {
                  links.length ? null : (
                    <div className={cls(style['add-wrapper'], style['corner-add'])}>
                      <i className={cls('iconfont-my', 'icon-my-plus')}></i>
                    </div>
                  )
                }
              </Link>
            </Delete>
          ) : (
            <Link
              key={link.key}
              className={
                cls(
                  style['social-link'],
                  style['view-mode-text'],
                  link.description ? style['with-desc'] : ''
                )
              }
              style={{
                ...(link.description ? { borderColor: 'var(--main-text-color)' } : {})
              }}
              onPress={() => onClick?.({ item: link, index })}
            >
              <i className={cls('iconfont-social-links', `icon-social-link-${link.icon}`, style['social-link_icon'])}></i>

              {
                link.description ? (
                  <span className={style.description}>{link.description}</span>
                ) : null
              }

              {
                links.length ? null : (
                  <div className={cls(style['add-wrapper'], style['corner-add'])}>
                    <i className={cls('iconfont-my', 'icon-my-plus')}></i>
                  </div>
                )
              }
            </Link>
          )
        )) : (
          <span className={style.tips} onClick={() => onClick?.()}>
            添加社交平台链接<i className={cls('iconfont-my', 'icon-my-arrow', style['tips-icon'])}></i>
          </span>
        )
      }

      <div
        className={cls(style['add-wrapper'], style['tail-add'])}
        onClick={() => onClick?.()}
      >
        <i className={cls('iconfont-my', 'icon-my-plus', 'icon-action')}></i>
      </div>
    </div>
  )
}
