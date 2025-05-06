'use client'

import { Card, CardBody } from '@heroui/card';

import DialogConfirm from '@/app/components/dialog/confirm';
import { EVENTS } from '@/app/constant/events';
import { UserModuleTextCopyProps } from '@/app/types/my/module/text-copy';
import event from '@/app/utils/event';

import style from './text-copy.module.scss';

export default function TextCopy({
  title,
  content
}: UserModuleTextCopyProps) {
  const onClickHandler = () => {
    event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, {
      show: true,
      body: (
        <DialogConfirm
          title={title}
          content={content}
          onCancel={() => {
            event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, { show: false });
          }}
          onConfirm={() => {
            navigator.clipboard.writeText(content);
            event.emit(EVENTS.UPDATE_PAGE_PREVIEW_MODAL, { show: false });
            event.emit(EVENTS.SHOW_ALERT, {
              text: '已复制到剪贴板',
              color: 'success',
            });
          }}
        />
      ),
      backdrop: 'opaque'
    })
  }

  return (
    <Card className={style.wrapper}>
      <CardBody className={style['card-body--wrapper']} onClick={onClickHandler}>
        <p>{title}</p>
      </CardBody>
    </Card>
  )
}
