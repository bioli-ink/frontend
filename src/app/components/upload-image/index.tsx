import dynamic from 'next/dynamic';

import Loading from '../loading';

const UploadImage = dynamic(
  () => import(/* webpackChunkName: "uploadImage" */'./component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default UploadImage;
