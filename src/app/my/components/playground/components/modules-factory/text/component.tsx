import { Textarea } from '@heroui/input';
import { Radio, RadioGroup } from '@heroui/radio';

import { ModuleType } from '@/app/types/my/module';

import { useUpdateModule } from '../../../hooks/use-update-module';
import RowItem from '../components/row-item';
import ModuleTemplate from '../template';
import style from './text.module.scss';
import { TextProps } from './types';

export default function Text({
  index,
  ...item
}: TextProps) {
  const updateModule = useUpdateModule({ index });

  return (
    <ModuleTemplate
      index={index}
      type={ModuleType.TEXT}
      settingContent={
        <>
          <RowItem
            title='文字内容'
            content={
              <Textarea
                placeholder='请输入文字内容'
                variant='bordered'
                defaultValue={item.content}
                onBlur={(event: unknown) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  updateModule('content', (event.target as HTMLInputElement).value);
                }}
              />
            }
          />

          <RowItem
            title='对齐方式'
            content={
              <RadioGroup
                orientation='horizontal'
                classNames={{
                  wrapper: style.align,
                }}
                color='danger'
                defaultValue={item.align}
                onValueChange={(value) => {
                  updateModule('align', value);
                }}
              >
                <Radio value='left'>左对齐</Radio>
                <Radio value='center'>居中</Radio>
                <Radio value='right'>右对齐</Radio>
              </RadioGroup>
            }
          />
        </>
      }
    />
  );
}
