import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';
import Image from 'next/image';
import { useState } from 'react';

import DragAndDrop from '@/app/components/drag-drop';
import { PLATFORM_TEXT } from '@/app/constant/list/social-links/platform';
import { PLATFORM_RULES } from '@/app/constant/list/social-links/rules';
import { useUploadBase64 } from '@/app/hooks/api/use-upload-base64';
import { FileType, SocialLinkType } from '@/app/types/my';
import { file2base64 } from '@/app/utils/transform';

import style from './social-link-input.module.scss';
import { SocialLinkInputProps } from './types';

export default function SocialLinkInput({
  id,
  defaultLink = '',
  defaultDescription = '',
  status,
  type = SocialLinkType.URL,
  userId,
  onAdd,
  onEdit
}: SocialLinkInputProps) {
  const isEdit = status === 'edit';
  const isImg = [SocialLinkType.IMAGE, SocialLinkType.QR_CODE].includes(type);
  const [link, setLink] = useState(defaultLink);
  const [image, setImage] = useState(isImg ? defaultLink : '');
  const [description, setDescription] = useState(defaultDescription);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const name = PLATFORM_TEXT[id];
  const rules = PLATFORM_RULES[id];

  const onLinkChange = (newValue: string) => {
    setLink(newValue);
    setIsInvalid(false);
  }

  const { run: runUploadBase64, loading } = useUploadBase64();

  const onActionHandler = () => {
    const action = isEdit ? onEdit : onAdd;

    switch (type) {
      case SocialLinkType.URL:
        if (link) {
          if (!rules?.validator?.(link)) {
            setErrorMessage('链接格式错误，请参考示例');
            setIsInvalid(true);
            return;
          }

          action({ link, description });
          setErrorMessage('');
    
          return;
        }
    
        setErrorMessage('请输入链接');
        setIsInvalid(true);
        break;
      case SocialLinkType.IMAGE:
      case SocialLinkType.QR_CODE:
        if (image) {
          runUploadBase64({
            base64: image,
            type: 'wechat',
            name: `${userId}-${Date.now()}`
          })
            .then((response) => {
              action({ link: response, description });
            });
          
          return;
        }

        setErrorMessage('请上传图片');
        break;
      default:
        if (rules?.validator?.(link)) {
          action({ link, description });
          return;
        }

        setErrorMessage(`请输入正确的${name}`);
        setIsInvalid(true);
        break;
    }
  };

  const onFileUpdate = (files: File[]) => {
    file2base64(files[0], (result) => {
      setImage(result as string);
      setErrorMessage('');
    });
  };

  const onReset = () => {
    setImage('');
  };

  return (
    <div className={style.wrapper}>
      {
        [SocialLinkType.IMAGE, SocialLinkType.QR_CODE].includes(type) ? (
          <div className={style['image-preview']}>
            {
              image ? (
                <>
                  <Button
                    className={style['reset-image']}
                    size='md'
                    startContent={<i className='iconfont-my icon-my-reset'></i>}
                    color='warning'
                    variant='ghost'
                    onPress={onReset}
                  >重置</Button>
                
                  <Image
                    src={image}
                    alt='image'
                    width={200}
                    height={200}
                  />
                </>
              ) : <DragAndDrop className={style['image-selector']} type={FileType.IMAGE} accept='image/*' onFileUpdate={onFileUpdate} />
            }

            <p className={style['image-upload--tips']}>{errorMessage}</p>
          </div>
        ) : (
          <Input
            variant='bordered'
            label={rules?.placeholder ? `请输入${name}的${rules?.placeholder || '链接'}` : `请输入${name}`}
            value={link}
            onValueChange={onLinkChange}
            isRequired
            isInvalid={isInvalid}
            errorMessage={errorMessage}
            description={rules?.example ? `示例：${rules?.example}` : ''}
            endContent={
              rules?.source ? (
                <Link
                  isExternal
                  showAnchorIcon
                  href={rules?.source}
                  className={style['redirect-source']}
                  target='_blank'
                  rel='noopener noreferrer'
                >去查看</Link>
              ) : null
            }
          />
        )
      }

      <Input
        variant='bordered'
        label='请输入描述'
        value={description}
        onValueChange={setDescription}
      />
      
      <Button
        className='btn-main-color'
        onPress={onActionHandler}
        isDisabled={loading}
      >{isEdit ? '编辑' : '添加'}</Button>
    </div>
  );
}
