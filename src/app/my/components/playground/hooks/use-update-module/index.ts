import { useDispatch } from 'react-redux';

import { updateUserModule } from '@/app/my/redux/my';

import { UseUpdateModuleProps } from './types';

/**
 * 统一更新模块方法，各个组件中更新 store 都是这个逻辑
 */
export const useUpdateModule = ({ index }: UseUpdateModuleProps) => {
  const dispatch = useDispatch();

  const updateModule = (key: string | object, value?: unknown) => {
    dispatch(updateUserModule({
      action: 'update',
      index,
      item: typeof key === 'string' ? { [key]: value } : key,
    }));
  };

  return updateModule;
};
