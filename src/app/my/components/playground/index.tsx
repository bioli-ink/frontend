import { ReactSortable } from '@miestasmia/react-sortablejs';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ModuleLoading from '@/app/components/module-loading';
import { ModuleType, UserModule } from '@/app/types/my/module';
import { parseJSON } from '@/app/utils/transform';
import { addTsAfterUrl } from '@/app/utils/url';

import { useQueryModule, useUpdateModule } from '../../hooks/use-module';
import { useUserConfig } from '../../hooks/use-user-config';
import { RootState } from '../../redux';
import { updateUniqueId } from '../../redux/base';
import { updateAvatar, updateBio, updateIsLoading, updateSocialLinks, updateUserModule, updateUsername } from '../../redux/my';
import AddModule from './components/add-module';
import BaseInfo from './components/base-info';
import Divider from './components/modules-factory/divider';
import Image from './components/modules-factory/image';
import Text from './components/modules-factory/text';
import TextCopy from './components/modules-factory/text-copy';
import URL from './components/modules-factory/url';
import MyLink from './components/my-link';
import Preview from './components/preview';
// import StyleSettings from './components/style-settings';
import style from './playground.module.scss';
import { ModuleComponents } from './types';

const moduleMap: Record<ModuleType, ModuleComponents> = {
  [ModuleType.URL]: URL,
  [ModuleType.DIVIDER]: Divider,
  [ModuleType.IMAGE]: Image,
  // [ModuleType.QR_CODE]: Divider,
  [ModuleType.TEXT]: Text,
  [ModuleType.TEXT_COPY]: TextCopy,
};

export default function Playground() {
  const { userModules, displayedUserModules, isLoading } = useSelector((state: RootState) => state.my);
  const dispatch = useDispatch();
  const setUserModules = (list: UserModule[]) => {
    dispatch(updateUserModule({ list }));
  };

  useUserConfig({
    onSuccess: (response) => {
      dispatch(updateUniqueId(response.id));
      dispatch(updateUsername(response.baseConfig.name || response.username));
      dispatch(updateBio(response.baseConfig.bio || ''));
      dispatch(updateAvatar(addTsAfterUrl(response.baseConfig.avatar)));
      dispatch(updateSocialLinks(parseJSON(response.baseConfig.platform || '[]')));
    },
  });

  const { runAsync: runQueryModule } = useQueryModule();

  useEffect(() => {
    let timeout = 0;

    dispatch(updateIsLoading(true));
    runQueryModule()
      .then(response => {
        dispatch(updateUserModule({
          id: response.id,
          list: parseJSON(response.json),
        }));
      })
      .finally(() => {
        // @ts-expect-error 定时器
        timeout = setTimeout(() => {
          dispatch(updateIsLoading(false));
        }, 200);
      });

    return () => {
      clearTimeout(timeout);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { run: runUpdateModule } = useUpdateModule();

  useEffect(() => {
    if (!userModules.id) return;

    // TODO 拖拽组件的问题，导致请求有点多，后面需要专项优化一下
    runUpdateModule({
      id: userModules.id,
      json: JSON.stringify(userModules.modules),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userModules]);

  return (
    <div className={style.wrapper}>
      <main className={style['action-wrapper']}>
        <div className={style['action-inner-wrapper']}>
          <MyLink />

          <BaseInfo />

          {/* TODO */}
          {/* <StyleSettings /> */}

          <AddModule />

          <ReactSortable
            handle='.template-drag-icon'
            ghostClass='drag-ghost'
            chosenClass='drag-chosen'
            animation={200}
            list={displayedUserModules}
            setList={setUserModules}
            className={style.modules}
          >
            {
              displayedUserModules.map((item, index) => {
                // @ts-expect-error 动态匹配组件
                return React.createElement(moduleMap[item.type], { key: item.id, index, ...item });
              })
            }
          </ReactSortable>
        </div>
      </main>

      <Preview />

      <ModuleLoading show={isLoading} />
    </div>
  );
}
