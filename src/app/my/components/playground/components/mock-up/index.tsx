import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const MockUp = dynamic(
  () => import(/* webpackChunkName: MockUp */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default MockUp;
