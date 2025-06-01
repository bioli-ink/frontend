import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { AUTH_TOKEN_KEY } from '@/app/constant/storage';
import { requestLogin } from '@/app/interface/auth';

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const { runAsync, loading } = useRequest(requestLogin, {
    manual: true,
    onSuccess: (response) => {
      localStorage.setItem(AUTH_TOKEN_KEY, response.token);
      onSuccess();
    },
  });

  return { runAsync, loading };
};
