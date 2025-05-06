import { DividerLength, DividerStyle, DividerTextPosition } from '@/app/types/my/module/divider';

export const DIVIDER_STYLE = [
  {
    key: DividerStyle.Solid,
    label: '实线'
  },
  {
    key: DividerStyle.Dashed,
    label: '虚线'
  },
  {
    key: DividerStyle.Dotted,
    label: '点线'
  }
];

export const DIVIDER_TEXT_POSITION = [
  {
    key: DividerTextPosition.None,
    label: '无'
  },
  {
    key: DividerTextPosition.Left,
    label: '左侧'
  },
  {
    key: DividerTextPosition.Center,
    label: '居中'
  },
  {
    key: DividerTextPosition.Right,
    label: '右侧'
  }
];

export const DIVIDER_LENGTH  = [
  {
    key: DividerLength.Full,
    label: '长线',
  },
  {
    key: DividerLength.Middle,
    label: '中长线',
  },
  {
    key: DividerLength.Short,
    label: '短线'
  }
]
