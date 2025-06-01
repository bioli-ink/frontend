import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const AddSocialLink = dynamic(
  () => import(/* webpackChunkName: "AddSocialLink" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default AddSocialLink;
