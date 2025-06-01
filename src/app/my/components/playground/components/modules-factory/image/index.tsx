import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const Image = dynamic(
  () => import(/* webpackChunkName: "Image" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default Image;
