'use client'

import { Card, CardBody } from '@heroui/card';

import { UserModuleUrlProps } from '@/app/types/my/module/url';

import style from './url.module.scss';

export default function URL({
  title,
  url
}: UserModuleUrlProps) {
  return (
    <Card className={style.wrapper}>
      <CardBody className={style['plain-url-wrapper']}>
        {
          url ? (
            <a href={url} className={style.url} target='_blank' rel='noreferrer noopener'>{title}</a>
          ) : <span className={style.url}>{title}</span>
        }
      </CardBody>
    </Card>
  )
}
