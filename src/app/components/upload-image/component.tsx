'use client';

import 'react-image-crop/dist/ReactCrop.css';

import { Button } from '@heroui/button';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
// https://github.com/sekoyo/react-image-crop?tab=readme-ov-file#props
import ReactCrop, {
  Crop,
  PixelCrop,
} from 'react-image-crop';

import DragAndDrop from '@/app/components/drag-drop';
import { FileType } from '@/app/types/my';
import { cls } from '@/app/utils/string';
import { file2base64 } from '@/app/utils/transform';

import { BTN_CONFIRM_TEXT, DEFAULT_COMPLETED_CROP, IMG_MAX_SIZE } from './config';
import { UploadImageProps, UploadImageStatus } from './types';
import style from './upload-image.module.scss';
import { canvasPreview, centerAspectCrop, getRealCroppedImage } from './utils';

export default function UploadImage({ loading, onUpload }: UploadImageProps) {
  const [status, setStatus] = useState<UploadImageStatus>(UploadImageStatus.SELECT);
  const [image, setImage] = useState('');
  const [fileName, setFileName] = useState('');
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>(DEFAULT_COMPLETED_CROP);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const finalCroppedImage = useRef('');

  const onImageUpdate = (files: File[]) => {
    if (!files || files.length <= 0) {
      return;
    }

    setCrop(undefined) // Makes crop preview update between images.
    file2base64(files[0], (result) => {
      setFileName(files[0].name);
      setImage(result?.toString() || '');
      setStatus(UploadImageStatus.CROP);
    });
  };

  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  // 图片加载成功之后设置裁剪参数
  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    const width = Math.min(naturalWidth, IMG_MAX_SIZE);
    const height = Math.min(naturalHeight, IMG_MAX_SIZE);
    
    setCrop(centerAspectCrop(width, height, 1));
    setImgSize({ width, height });
  }

  const onReSelect = () => {
    setImage('');
    setFileName('');
    setCrop(undefined);
    setCompletedCrop(DEFAULT_COMPLETED_CROP);
    finalCroppedImage.current = '';
    setStatus(UploadImageStatus.SELECT);
  };

  const onUploadPress = async () => {
    if (status === UploadImageStatus.UPLOAD) {
      onUpload({ name: fileName, base64: finalCroppedImage.current });
    } else if (status === UploadImageStatus.CROP) {
      getRealCroppedImage({
        image: imgRef.current,
        previewCanvas: previewCanvasRef.current,
        completedCrop,
        callback: (base64) => {
          finalCroppedImage.current = base64;
          setStatus(UploadImageStatus.UPLOAD);
        },
      });
    }
  };

  useEffect(()  => {
    console.log('useEffect============')
  }, []);

  useEffect(() => {
    if (
      completedCrop?.width &&
      completedCrop?.height &&
      imgRef.current &&
      previewCanvasRef.current
    ) {
      canvasPreview(
        imgRef.current,
        previewCanvasRef.current,
        completedCrop,
      )
    }
  }, [completedCrop]);

  // 重置裁剪框
  const onReset = () => {
    if (!imgRef.current) return;

    setCrop(centerAspectCrop(imgRef.current.width, imgRef.current.height, 1));
  };

  return (
    image ? (
      <>
        <Button
          size='md'
          startContent={<i className='iconfont-my icon-my-reset'></i>}
          color='warning'
          variant='ghost'
          className='w-[36px]'
          onPress={onReset}
          disabled={loading}
        >重置</Button>

        <div className='flex justify-center items-center'>
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            disabled={status === UploadImageStatus.UPLOAD}
            style={imgSize}
            className={style['crop-wrapper']}
          >
            <Image
              ref={imgRef}
              alt='Crop me'
              src={image}
              className={style['image-preview']}
              width={imgSize.width}
              height={imgSize.height}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        </div>

        {
          completedCrop ? (
            <canvas
              ref={previewCanvasRef}
              className='hidden'
              style={{
                width: completedCrop.width,
                height: completedCrop.height,
              }}
            ></canvas>
          ) : null
        }

        <div className={style['btn-wrapper']}>
          <Button
            radius='full'
            className={cls(style['btn-cancel'], 'btn-main-color-other')}
            onPress={onReSelect}
            isLoading={loading}
            disabled={loading}
          >重新选择</Button>

          <Button
            radius='full'
            className='btn-main-color'
            onPress={onUploadPress}
            isLoading={loading}
            disabled={loading}
          >{BTN_CONFIRM_TEXT[status]}</Button>
        </div>
      </>
    ) : <DragAndDrop type={FileType.IMAGE} accept='image/*' onFileUpdate={onImageUpdate} />
  );
};
