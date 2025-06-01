import { Image as ImagePreview } from '@heroui/image';
import { Input } from '@heroui/input';
import useLatest from 'ahooks/lib/useLatest';
import { useState } from 'react';
import isURL from 'validator/lib/isURL';

import Delete from '@/app/components/delete';
import UploadImage from '@/app/components/upload-image';
import { EVENTS } from '@/app/constant/events';
import { useUploadBase64 } from '@/app/hooks/api/use-upload-base64';
import { ModuleType } from '@/app/types/my/module';
import event from '@/app/utils/event';
import { removeExt } from '@/app/utils/string';

import { useUpdateModule } from '../../../hooks/use-update-module';
import RowItem from '../components/row-item';
import ModuleTemplate from '../template';
import style from './image.module.scss';
import { ImageProps } from './types';

export default function Image({
  index,
  ...item
}: ImageProps) {
  const [imgTitle, setImgTitle] = useState(item.title);
  const [imgDesc, setImgDesc] = useState(item.description);
  const [imgLabel, setImgLabel] = useState(item.label);
  const [imgHref, setImgHref] = useState(item.href);
  const [isImgHrefInvalid, setImgHrefInvalid] = useState(false);
  const [imgHrefErrorMessage, setImgHrefErrorMessage] = useState('');

  const updateModule = useUpdateModule({ index });
  const { run: runUploadBase64, loading: loadingUploadBase64 } = useUploadBase64({
    onSuccess: (url) => {
      updateModule('src', url);
      event.emit(EVENTS.HIDE_MODAL);
    }
  });
  
  const latestLoadingUploadBase64 = useLatest(loadingUploadBase64);
  const onPreviewClick = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '上传图片',
      body: (
        <UploadImage
          loading={latestLoadingUploadBase64.current}
          onUpload={({ name, base64 }) => {
            runUploadBase64({
              type: 'image',
              name: removeExt(name),
              base64: base64,
            });
          }}
        />
      )
    })
  };

  return (
    <ModuleTemplate
      index={index}
      type={ModuleType.IMAGE}
      tips='未上传图片时，右侧预览展示的是 Bing 每日一图'
      coreContent={
        <div className={style['preview-wrapper']} onClick={onPreviewClick}>
          {
            item.src ? (
              <Delete
                title='确定删除图片？'
                onConfirm={() => { updateModule('src', '') }}
              >
                <ImagePreview
                  src={item.src}
                  classNames={{ img: style['img-preview'] }}
                />
              </Delete>
            ) : (
              <div className={style['empty-wrapper']}>
                <i className='iconfont-my icon-my-upload'></i>
              </div>
            )
          }
        </div>
      }
      settingContent={
        <>
          <RowItem
            title='跳转链接'
            content={
              <Input
                placeholder='请输入点击图片的跳转链接'
                variant='bordered'
                value={imgHref}
                isInvalid={isImgHrefInvalid}
                errorMessage={imgHrefErrorMessage}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  setImgHref(e.target.value);
                }}
                onBlur={() => {
                  const result = imgHref === '' || isURL(imgHref);

                  if (result) {
                    updateModule('href', imgHref);
                    setImgHrefErrorMessage('');
                  } else {
                    setImgHrefErrorMessage('链接格式错误，内容未保存');
                  }

                  setImgHrefInvalid(!result);
                }}
              />
            }
          />

          <RowItem
            title='标题'
            content={
              <Input
                placeholder='请输入图片标题'
                variant='bordered'
                value={imgTitle}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  setImgTitle(e.target.value);
                }}
                onBlur={() => {
                  updateModule('title', imgTitle);
                }}
              />
            }
          />

          <RowItem
            title='描述'
            content={
              <Input
                placeholder='请输入图片描述'
                variant='bordered'
                value={imgDesc}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  setImgDesc(e.target.value);
                }}
                onBlur={() => {
                  updateModule('description', imgDesc);
                }}
              />
            }
          />

          <RowItem
            title='标签'
            content={
              <Input
                placeholder='请输入图片标签'
                variant='bordered'
                value={imgLabel}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  setImgLabel(e.target.value);
                }}
                onBlur={() => {
                  updateModule('label', imgLabel);
                }}
              />
            }
          />
        </>
      }
    />
  )
}
