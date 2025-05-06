'use client'

import { Provider } from 'react-redux';

import { useTodayImage } from '@/app/my/hooks/use-today-image';
import { store } from '@/app/my/redux';

import Playground from '../..';

export default function PlaygroundWrapper() {
  useTodayImage();

  return (
    <Provider store={store}>
      <Playground />
    </Provider>
  );
}
