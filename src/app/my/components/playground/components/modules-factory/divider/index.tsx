import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const Divider = dynamic(
  () => import(/* webpackChunkName: "Divider" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default Divider;
