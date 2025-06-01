import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const QRCode = dynamic(
  () => import(/* webpackChunkName: "QRCode" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default QRCode;
