'use client';

import useRequest from 'ahooks/lib/useRequest/src/useRequest';

import { getLoginStatus } from '@/app/interface/auth';

export const useLoginStatus = () => {
  const { data } = useRequest(getLoginStatus);

  return data;
};
