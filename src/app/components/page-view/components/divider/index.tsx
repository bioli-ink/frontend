import { DividerTextPosition, UserModuleDividerProps } from '@/app/types/my/module/divider';
import { cls } from '@/app/utils/string';

import style from './divider.module.scss';

export default function Divider({
  dividerText,
  dividerStyle,
  dividerLength,
  dividerTextPosition
}: UserModuleDividerProps) {
  return (
    <div className={style.wrapper}>
      <div
        className={cls(style['inner-wrapper'], dividerText ? 'gap-[2px]' : '')}
        style={{ width: dividerLength }}
      >
        { (dividerTextPosition === DividerTextPosition.Left && dividerText) ? <div className={style.text}>{dividerText}</div> : null }

        <div className={cls(style.divider, style.left)} style={{ borderStyle: dividerStyle }}></div>

        { (dividerTextPosition === DividerTextPosition.Center && dividerText) ? <div className={style.text}>{dividerText}</div> : null }

        <div
          className={cls(style.divider, style.right)}
          style={{ borderStyle: dividerStyle }}
        ></div>

        { (dividerTextPosition === DividerTextPosition.Right && dividerText) ? <div className={style.text}>{dividerText}</div> : null }
      </div>
    </div>
  );
}
