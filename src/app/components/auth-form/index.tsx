import dynamic from 'next/dynamic';

import Loading from '../loading';

const AuthForm = dynamic(
  () => import(/* webpackChunkName: "AuthForm" */'./component'),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default AuthForm;
