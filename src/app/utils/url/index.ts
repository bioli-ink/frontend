import { DAILY_IMAGE } from '@/app/constant/storage';

/**
 * 解析 url 的 search 部分
 */
export const parseSearch = (rawSearch?: string) => {
  if (!rawSearch) {
    rawSearch = location.search;
  }

  const search = rawSearch.replace(/^\?/, '');
  const searchArr = search.split('&');
  const result: Record<string, string> = {};

  searchArr.forEach(item => {
    const [key, value] = item.split('=');

    result[key] = value;
  });

  return result;
};

/**
 * 给链接最后加时间戳，保证没有缓存
 * TODO 不应该直接接?，需要判断传入的 url 里的内容
 */
export const addTsAfterUrl = (url: string = '') => {
  if (!url) return '';

  return `${url}?t=${Date.now()}`;
};

/**
 * 从 localStorage 中取当天的图片作为默认图
 */
export const getDailyImageUrl = () => {
  const url = JSON.parse(localStorage.getItem(DAILY_IMAGE) || '{}')?.url;

  return url ? `${url}?imageView2/1/w/600/h/400` : '';
};
