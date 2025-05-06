import { EVENTS } from '@/app/constant/events';
import event from '@/app/utils/event';

export const TODO_LIST = [
  {
    key: 'login',
    label: '注册/登录',
    onClick: () => {
      event.emit(EVENTS.UPDATE_MODAL_AUTH, { show: true });
    },
  },
  {
    key: 'home',
    label: 'Bioli.ink 首页',
    onClick: () => {
      location.href = '/';
    },
  },
  {
    key: 'help',
    label: '查看帮助',
    wip: true,
    onClick: () => {
      location.href = '/help';
    }
  }
];

export const MORE_LIST = [
  {
    key: 'report',
    label: '不良信息举报',
    wip: true,
    onClick: () => {
      location.href = '/report';
    },
  },
  {
    key: 'feedback',
    label: '提交失效的 Bioli.ink 页面',
    wip: true,
    onClick: () => {
      location.href = '/feedback';
    },
  },
];
