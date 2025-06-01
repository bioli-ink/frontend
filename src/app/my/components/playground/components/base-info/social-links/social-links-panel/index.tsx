import dynamic from 'next/dynamic';

import Loading from '@/app/components/loading';

const SocialLinksPanel = dynamic(
  () => import(/* webpackChunkName: SocialLinksPanel */ './component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default SocialLinksPanel;
