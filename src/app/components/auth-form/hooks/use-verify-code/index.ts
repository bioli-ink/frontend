import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { getVerifyCode } from '@/app/interface/auth';

export const useVerifyCode = () => {
  const { runAsync, loading } = useRequest(getVerifyCode, {
    manual: true,
  });

  return { runAsync, loading };
};
