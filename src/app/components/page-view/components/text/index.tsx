import { UserModuleTextProps } from '@/app/types/my/module/text';

import style from './text.module.scss';

export default function Text({ content, align }: UserModuleTextProps) {
  return (
    <div className={style.wrapper} style={{ textAlign: align }}>{content}</div>
  );
}
