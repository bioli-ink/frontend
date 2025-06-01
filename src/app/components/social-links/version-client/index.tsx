'use client'

import '@/app/assets/icon/social-link/iconfont.css';

import { Image } from '@heroui/image';
import { Link } from '@heroui/link';

import { EVENTS } from '@/app/constant/events';
import { PLATFORM_TEXT } from '@/app/constant/list/social-links/platform';
import { SocialLink, SocialLinkType } from '@/app/types/my';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './social-links.module.scss';
import { SocialLinksProps } from './types';

export default function SocialLinks({
  links,
  className = '',
}: SocialLinksProps) {
  const getHref = ({ type, link }: { type: SocialLinkType; link: string }) => {
    let result = 'javascript:;';

    switch (type) {
      case SocialLinkType.PHONE:
        result = `tel:${link}`;
        break;
      case SocialLinkType.EMAIL:
        result = `mailto:${link}`;
        break;
      default:
        break;
    }

    return result;
  }

  const onClick = (item: SocialLink) => {
    switch (item.type) {
      case SocialLinkType.URL:
        window.open(item.link, '__blank');
        break;
      case SocialLinkType.IMAGE:
      case SocialLinkType.QR_CODE:
        if (item.type === SocialLinkType.QR_CODE) {
          event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, {
            show: true,
            body: (
              <Image src={item.link} alt='图片'></Image>
            ),
            classNames: {
              base: 'bg-transparent'
            },
          });
        }
        break;
      case SocialLinkType.COPY_TEXT:
        event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, {
          show: true,
          header: <p>复制{PLATFORM_TEXT[item.id]}</p>,
          body: (
            <p style={{ textAlign: 'center' }}>{item.link}</p>
          ),
          footerConfig: {
            show: true,
            onConfirm: () => {
              navigator.clipboard.writeText(item.link);
            },
            onCancel: () => {
              event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, { show: false });
            }
          },
        });
        break;
      default:
        break;
    }
  }

  if (!links.length) return null;

  return (
    <div className={cls(style.wrapper, className)}>
      {
        links.map((item) => (
          <Link
            key={item.key}
            className={
              cls(
                style['social-link'],
                item.description ? style['with-desc'] : ''
              )
            }
            style={{
              ...(item.description ? { borderColor: 'var(--main-text-color)' } : {})
            }}
            onPress={() => onClick?.(item)}
            href={getHref({ type: item.type, link: item.link })}
          >
            <i className={cls('iconfont-social-links', `icon-social-link-${item.icon}`, style['social-link_icon'], 'icon-action')}></i>

            {
              item.description ? (
                <span className={style.description}>{item.description}</span>
              ) : null
            }
          </Link>
        ))
      }
    </div>
  )
}
