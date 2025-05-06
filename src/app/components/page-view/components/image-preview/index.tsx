'use client'

import { Chip } from '@heroui/chip';
import { Image } from '@heroui/image';

import { EVENTS } from '@/app/constant/events';
import { UserModuleImageProps } from '@/app/types/my/module/image';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';
import { getDailyImageUrl } from '@/app/utils/url';

import style from './image-preview.module.scss';

export default function ImagePreview({
  src,
  title,
  href,
  description,
  label,
  alt = '',
}: UserModuleImageProps) {
  const hasFooter = Boolean(title || description);
  const imageSrc = src || getDailyImageUrl();
  const onImageClick = () => {
    if (href) {
      window.open(href, '_blank', 'referer=noreferer');
    } else {
      event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, {
        show: true,
        body: (
          <Image src={imageSrc} alt='image' />
        )
      })
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style['image-wrapper']}>
        <Image
          className={cls(style.image, hasFooter ? '' : 'rounded-b-[10px]')}
          removeWrapper
          radius='none'
          src={imageSrc}
          alt={alt}
          onClick={onImageClick}
        />
      </div>

      {
        label ? (
          <Chip
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            size='sm'
            color='danger'
            radius='full'
            className={style.label}
            variant='shadow'
            classNames={{
              content: 'drop-shadow shadow-black text-white'
            }}
          >{label}</Chip>
        ) : null
      }

      {
        hasFooter ? (
          <div className={style.footer}>
            {title ? <div className={style.title}>{title}</div> : null }

            {description ? <div className={style.description}>{description}</div> : null}
          </div>
        ) : null
      }
    </div>
  );
}
