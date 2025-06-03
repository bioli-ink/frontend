import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { Suspense } from 'react';

import CommonLayout from '../components/common-layout';
import Loading from '../components/loading';
import Logo from '../components/logo';
import NotFound from '../components/not-found';
import PageView from '../components/page-view';
import { getClientUserInfo } from '../interface/user';
import { parseJSON } from '../utils/transform';
import style from './username.module.scss';

export default async function Slug({ params }: { params: Promise<{ username: string }> }) {
  let data;
  let name = '';

  try {
    data = await getClientUserInfo((await params).username);
    name = data.baseConfig.name || data.username || '';
  } catch {
  }
  
  if (!data || !Object.keys(data).length) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <CommonLayout>
        <PageView
          avatar={data.baseConfig.avatar}
          username={name}
          bio={data.baseConfig.bio || ''}
          socialLinks={parseJSON(data.baseConfig.platform || '[]')}
          userModules={data.modules.list}
        />

        <section className={style['extra-area']}>
          <Button
            size='lg'
            radius='full'
            className={style['btn-join']}
            startContent={<Logo width={20} height={20} />}
            as={Link}
            href='/'
          >和{name}一起加入 Bioli.ink</Button>
        </section>
      </CommonLayout>
    </Suspense>
  );
}

export const runtime = "edge";
