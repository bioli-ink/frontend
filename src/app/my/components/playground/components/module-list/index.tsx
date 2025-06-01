import { ModuleType } from '@/app/types/my/module';
import { cls } from '@/app/utils/string';

import { MODULE_LIST } from './config';
import style from './module-list.module.scss';

export default function ModuleList({ onModuleClick }: {
  onModuleClick: (type: ModuleType) => void;
}) {
  return (
    <div className={style.wrapper}>
      {
        MODULE_LIST.map(module => (
          <div className={cls(style.module, 'hover-bg')} key={module.key} onClick={() => onModuleClick(module.type)}>
            <i className={cls('iconfont-my', `icon-my-${module.icon}`, style['module-icon'])}></i>

            <p className={style['module-title']}>{module.title}</p>

            <p className={style['module-description']}>{module.description}</p>
          </div>
        ))
      }

      <div className={cls(style.module, 'justify-center')}>
        <p className={style['module-title']}>更多模块，即将上线！</p>
      </div>
    </div>
  )
}
