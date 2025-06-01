import { Input } from '@heroui/input';
import { Select, SelectItem } from '@heroui/select'
import { SetStateAction, useState } from 'react';

import { ModuleType } from '@/app/types/my/module';
import { DividerLength, DividerStyle, DividerTextPosition } from '@/app/types/my/module/divider';
import { cls } from '@/app/utils/string';

import { useUpdateModule } from '../../../hooks/use-update-module';
import RowItem from '../components/row-item';
import ModuleTemplate from '../template';
import { DIVIDER_LENGTH, DIVIDER_STYLE, DIVIDER_TEXT_POSITION } from './config';
import { DividerProps } from './types';

export default function Divider({
  index,
  ...item
}: DividerProps) {
  const [dStyle, setDStyle] = useState(item.dividerStyle);
  const [dLength, setDLength] = useState(item.dividerLength);
  const [dTextPosition, setDTextPosition] = useState(item.dividerTextPosition);
  const [dText, setDText] = useState(item.dividerText);

  const updateModule = useUpdateModule({ index });

  return (
    <ModuleTemplate
      index={index}
      type={ModuleType.DIVIDER}
      settingContent={
        <>
          <RowItem
            title='样式'
            content={
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <Select
                variant='bordered'
                placeholder='选择分割线样式'
                size='md'
                selectedKeys={[dStyle]}
                onChange={(e: { target: { value: unknown; }; }) => {
                  setDStyle(e.target.value as DividerStyle);
                  updateModule('dividerStyle', e.target.value);
                }}
              >
                {
                  DIVIDER_STYLE.map(style => (
                    <SelectItem key={style.key} textValue={style.label}>
                      {
                        <div
                          className={cls('border-b-[1px]', 'border-b-black/50', 'w-full')}
                          style={{ borderStyle: style.key }}
                        ></div>
                      }
                    </SelectItem>
                  ))
                }
              </Select>
            }
          />

          <RowItem
            title='长度'
            content={
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <Select
                variant='bordered'
                placeholder='选择分割线长度'
                size='md'
                selectedKeys={[dLength]}
                onChange={(e: { target: { value: unknown; }; }) => {
                  setDLength(e.target.value as DividerLength);
                  updateModule('dividerLength', e.target.value);
                }}
              >
                {
                  DIVIDER_LENGTH.map(length => (
                    <SelectItem key={length.key}>{length.label}</SelectItem>
                  ))
                }
              </Select>
            }
          />

          <RowItem
            title='文字位置'
            content={
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <Select
                variant='bordered'
                placeholder='选择分割线文字位置'
                size='md'
                selectedKeys={[dTextPosition]}
                onChange={(event: unknown) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  const newPos = event.target.value as DividerTextPosition;

                  setDTextPosition(newPos);
                  updateModule('dividerTextPosition',newPos);
                }}
              >
                {
                  DIVIDER_TEXT_POSITION.map(position => (
                    <SelectItem key={position.key}>{position.label}</SelectItem>
                  ))
                }
              </Select>
            }
          />

          {
            dTextPosition === DividerTextPosition.None ? null : (
              <RowItem
                title='文字内容'
                content={
                  <Input
                    placeholder='请输入文字'
                    variant='bordered'
                    value={dText}
                    onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
                      setDText(e.target.value);
                    }}
                    onBlur={() => {
                      updateModule('dividerText', dText);
                    }}
                  />
                }
              />
            )
          }
        </>
      }
    />
  )
}
