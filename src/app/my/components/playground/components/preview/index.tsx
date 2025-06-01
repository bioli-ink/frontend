import { useSelector } from 'react-redux';

import PageView from '@/app/components/page-view';
import { RootState } from '@/app/my/redux';

import style from './preview.module.scss';

export default function Preview() {
  const { avatar, username, bio, socialLinks, displayedUserModules } = useSelector((root: RootState) => root.my);

  return (
    <section className={style['preview-wrapper']}>
      <div className={style['preview-inner-wrapper']}>
        <div
          id='preview'
          className='device-shell'
          // TODO 支持不同尺寸屏幕
        >
          <PageView
            scene='simulator'
            avatar={avatar}
            username={username}
            bio={bio}
            socialLinks={socialLinks}
            userModules={displayedUserModules}
          />
        </div>
      </div>
    </section>
  );
}
