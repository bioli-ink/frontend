import BtnAction from '@/app/components/btn-action';
import { EVENTS } from '@/app/constant/events';
import { AUTH_TOKEN_KEY } from '@/app/constant/storage';
import event from '@/app/utils/event';

import { HelpItem } from '../../types';
import style from './more.module.scss';

export const HELP_LIST: HelpItem[] = [
  {
    title: '账户',
    entries: [
      {
        key: 'myAccount',
        name: '我的账户',
        icon: 'account',
        redirect: '/my/account',
        disabled: true,
      },
      {
        key: 'bill',
        name: '账单',
        icon: 'bill',
        redirect: '/my/bill',
        disabled: true,
      },
      {
        key: 'cookies',
        name: 'Cookies偏好设置',
        icon: 'cookies',
        redirect: '/my/cookies',
        disabled: true,
      }
    ]
  },
  {
    title: '帮助与支持',
    entries: [
      {
        key: 'online-ask',
        name: '在线咨询',
        icon: 'ask',
        action: () => {},
        disabled: true,
      },
      {
        key: 'help-docs',
        name: '帮助文档',
        icon: 'docs',
        redirect: '',
        disabled: true,
      },
      {
        key: 'feedback',
        name: '提交反馈',
        icon: 'feedback',
        redirect: '',
        disabled: true,
      },
    ]
  },
  {
    title: '',
    entries: [
      {
        key: 'logout',
        name: '退出登录',
        icon: 'logout',
        action: () => {
          event.emit(EVENTS.UPDATE_USER_MORE, false);
          event.emit(EVENTS.SHOW_MODAL, {
            show: true,
            title: '确认退出？',
            showCloseBtn: false,
            body: (
              <div className='text-center'>
                <p>确定要退出登录吗？</p>
                <p>如果退出，任何未保存的内容都会丢失。如果想先保存修改，请点击取消后将数据保存</p>
              </div>
            ),
            footer: (
              <BtnAction
                onConfirm={() => {
                  localStorage.removeItem(AUTH_TOKEN_KEY);
                  location.replace('/');
                }}
                onCancel={() => {
                  event.emit(EVENTS.HIDE_MODAL);
                }}
              />
            ),
            modalProps: {
              className: style['logout-modal']
            },
            modalBodyClassName: style['logout-modal-body']
          })
        },
      }
    ]
  }
];