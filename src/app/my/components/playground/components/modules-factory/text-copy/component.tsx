import { Textarea } from '@heroui/input';

import AdvancedInput from '@/app/my/components/advanced-input';
import { ModuleType } from '@/app/types/my/module';

import { useUpdateModule } from '../../../hooks/use-update-module';
import ModuleTemplate from '../template';
import { TextCopyProps } from './types';

export default function TextCopy({
  index,
  ...item
}: TextCopyProps) {
  const updateModule = useUpdateModule({ index });

  return (
    <ModuleTemplate
      index={index}
      icon='copy'
      type={ModuleType.TEXT_COPY}
      coreContent={
        <AdvancedInput
          inputProps={{
            placeholder: '标题',
            defaultValue: item.title,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onBlur: (event: any) => {
              updateModule('title', (event.target as HTMLInputElement).value);
            },
          }}
          className='main-title'
        />
      }
      settingContent={
        <Textarea
          placeholder='请输入需要复制的内容'
          variant='bordered'
          defaultValue={item.content}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onBlur={(event: any) => {
            updateModule('content', (event.target as HTMLInputElement).value);
          }}
        />
      }
    />
  );
}
