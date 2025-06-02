import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const SocialLinkInput = dynamic(
  () => import(/* webpackChunkName: "SocialLinkInput" */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default SocialLinkInput;
