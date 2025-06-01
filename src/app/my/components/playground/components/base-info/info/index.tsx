import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const Info = dynamic(
  () => import(/* webpackChunkName: "Info" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default Info;
