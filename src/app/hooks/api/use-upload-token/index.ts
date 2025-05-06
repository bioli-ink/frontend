import { useRequest } from 'ahooks';

import { getUploadToken } from '@/app/interface/auth';

export const useUploadToken = () => {
  const { runAsync } = useRequest(getUploadToken, {
    manual: true,
  });

  return { runAsync };
};
