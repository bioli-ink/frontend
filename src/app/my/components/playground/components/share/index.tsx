import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const Share = dynamic(
  () => import(/* webpackChunkName: "Share" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default Share;
