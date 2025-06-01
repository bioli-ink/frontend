'use client'

import { Button } from '@heroui/button';
import { useDispatch, useSelector } from 'react-redux';

import { EVENTS } from '@/app/constant/events';
import { useUpdateModule } from '@/app/my/hooks/use-module';
import { RootState } from '@/app/my/redux';
import { updateUserModule } from '@/app/my/redux/my';
import { moduleFactory } from '@/app/my/utils/user-module';
import { ModuleType } from '@/app/types/my/module';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import ModuleList from '../module-list';
import style from './add-module.module.scss';

export default function AddModule() {
  const { userModules } = useSelector((root: RootState) => root.my);
  const dispatch = useDispatch();
  const { runAsync: runUpdateModule } = useUpdateModule();

  const onAddModule = (type: ModuleType) => {
    const newItem = moduleFactory[type]?.();

    if (!newItem) {
      alert('error');
      return;
    }

    runUpdateModule({
      id: userModules.id,
      json: JSON.stringify([
        newItem,
        ...userModules.modules,
      ]),
    })
      .then(() => {
        dispatch(updateUserModule({
          action: 'add',
          item: newItem,
        }));
        event.emit(EVENTS.HIDE_MODAL);
      })
  };

  const onOtherModule = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '添加其它模块',
      body: <ModuleList onModuleClick={onAddModule} />,
      modalProps: {
        className: 'w-[608px] max-w-[none]'
      }
    })
  };

  return (
    <section className={style['add-module']}>
      <Button
        radius='full'
        className={cls(style['add-link'], 'btn-main-color')}
        onPress={() => onAddModule(ModuleType.URL)}
      >
        <i className={cls('iconfont-my', 'icon-my-plus', style['add-link_icon'])}></i>
        <span>添加链接</span>
      </Button>

      <Button radius='full' className='btn-main-color-other' onPress={onOtherModule}>添加其它模块</Button>
    </section>
  )
}
