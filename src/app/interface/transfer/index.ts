import http from '@/app/utils/http';

const SERVER_DOMAIN = process.env.NEXT_PUBLIC_SERVER_DOMAIN;

export const getBingTodayImage = () => {
  return http.get(`${SERVER_DOMAIN}/transfer/bing/today`);
};
