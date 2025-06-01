import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const TextCopy = dynamic(
  () => import(/* webpackChunkName: TextCopy */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default TextCopy;
