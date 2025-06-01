import useRequest from 'ahooks/lib/useRequest/src/useRequest';
import dayjs from 'dayjs';
import { useEffect } from 'react';

import { DAILY_IMAGE } from '@/app/constant/storage';
import { getBingTodayImage } from '@/app/interface/transfer';
import { parseJSON } from '@/app/utils/transform';

/**
 * 查每日图片，存 localStorage
 */

export const useTodayImage = () => {
  const { run } = useRequest(getBingTodayImage, {
    manual: true,
    onSuccess: (response) => {
      localStorage.setItem(DAILY_IMAGE, JSON.stringify(response))
    },
  });

  useEffect(() => {
    const storage = parseJSON(localStorage.getItem(DAILY_IMAGE) || '{}');

    if (!storage || storage !== dayjs().format('YYYY-MM-DD')) {
      run();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
