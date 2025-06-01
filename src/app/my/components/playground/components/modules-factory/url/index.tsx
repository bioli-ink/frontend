import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const URL = dynamic(
  () => import(/* webpackChunkName: URL */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default URL;
