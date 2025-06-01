import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const Text = dynamic(
  () => import(/* webpackChunkName: Text */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default Text;
