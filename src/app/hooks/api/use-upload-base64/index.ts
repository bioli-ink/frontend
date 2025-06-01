import { useState } from 'react';

import { uploadBase64 } from '@/app/utils/qiniu';

import { useUploadToken } from '../use-upload-token';
import { RunUploadBase64Props, UseUploadBase64Props } from './types';

export const useUploadBase64 = (props: UseUploadBase64Props = {}) => {
  const { onSuccess } = props;
  const [loading, setLoading] = useState(false);
  const { runAsync: runUploadToken } = useUploadToken();

  const run = async ({ type, name, base64 }: RunUploadBase64Props): Promise<string> => {    
    return new Promise((resolve, reject) => {
      setLoading(true);
      runUploadToken({ type, name })
        .then(async ({ token, key }) => {
          const result = await uploadBase64({
            base64,
            token,
            key,
          });
          const url = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}/${result.key}`;

          onSuccess?.(url);
          setLoading(false);
          resolve(url);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    })
  };

  return { run, loading };
};
