import axios from 'axios';

import { EVENTS } from '@/app/constant/events';
import { AUTH_TOKEN_KEY } from '@/app/constant/storage';
import { ApiStatus, HttpStatus } from '@/app/types/common/http-status';

import event from '../event';
import { parseJSON, queryStringify } from '../transform';
import { parseSearch } from '../url';

const IGNORE_ERROR_TIPS = [
  '/auth/login-status',
];
const IGNORE_REDIRECT_WHEN_AUTH_FAIL = [
  '/'
]

const instance = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  transformRequest: [
    function (data) {
      // 对发送的 data 进行任意转换处理

      return JSON.stringify(data);
    },
  ],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    function (data) {
      // 对接收的 data 进行任意转换处理

      return parseJSON(data);
    },
  ],
});

const URL_WHITE_LIST = [
  '/auth/register',
  '/auth/login'
];

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // TODO 输出请求的参数，url 等
    if (!URL_WHITE_LIST.includes(config.url || '') && !config.url?.includes('/client')) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`;
    }

    if (config.method === 'get') {
      const [, url, search] = config.url?.match(/(.*)(\?.*)/) || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: Record<string, any> = {};

      if (search) {
        Object.entries(parseSearch(search)).forEach(([key, value]) => {
          if (value !== 'undefined') {
            result[key] = value;
          }
        });
  
        config.url = `${url}?${queryStringify(result)}`;
      }
    }

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

let isProcessingError = false;

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    // TODO 输出请求的返回内容
    // console.log('response', response)
    // TODO 处理登录态过期
    // if (response.data.code === CODE.LOGIC_STATUS.CLIENT_ERROR.LOGIN_STATUS_EXPIRED) {
    //   window.location.replace(`${window.location.protocol}//${window.location.host}/login?redirect=${encodeURIComponent(window.location.href)}`);

    //   return Promise.reject(response.data);
    // }

    // 正常的请求
    if (
      String(response.status).startsWith('2') &&
      (response.data.code === ApiStatus.SUCCESS || Object.entries(response.data).length === 0)
    ) {
      return Promise.resolve(response.data.data);
    }

    const showErrorTips = Boolean(IGNORE_ERROR_TIPS.filter(url => response.config.url?.includes(url)).length);

    if (showErrorTips) {
      event.emit(EVENTS.SHOW_ALERT, {
        text: response.data.message || '请求失败，请重试',
        color: 'danger',
      });
    }

    return Promise.reject(response.data);
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    if (!String(error.status).startsWith('2') && isProcessingError) {
      return;
    }

    const showErrorTips = !Boolean(IGNORE_ERROR_TIPS.filter(url => error.config.url.includes(url)).length);

    if (error.status === HttpStatus.AUTHORIZATION_FAIL && location.href !== '/') {
      isProcessingError = true;

      if (!IGNORE_REDIRECT_WHEN_AUTH_FAIL.includes(location.pathname)) {
        location.replace(`${location.protocol}//${location.host}?redirect=${encodeURIComponent(location.href)}`);
      }

      if (showErrorTips) {
        event.emit(EVENTS.SHOW_ALERT, {
          text: '登录态过期，正在跳转',
          color: 'danger',
        });
      }

      return;
    }


    if (showErrorTips) {
      event.emit(EVENTS.SHOW_ALERT, {
        text: error.response?.data?.message || '请求失败，请重试',
        color: 'danger',
      });
    }

    return Promise.reject(error.response?.data);
  }
);

export default instance;