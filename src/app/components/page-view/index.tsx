/**
 * 项目的核心展示组件
 * 1. 用户设计页的预览
 * 2. 用户最终页面的展示
 */
import { Avatar } from '@heroui/avatar';
import React from 'react';

import { ModuleType } from '@/app/types/my/module';
import { cls } from '@/app/utils/string';

import FooterLogo from '../footer-logo';
import SocialLinks from '../social-links/version-client';
import Divider from './components/divider';
import Image from './components/image-preview';
import ImageModal from './components/modal'
// import QRCode from './components/qr-code';
import Text from './components/text';
import TextCopy from './components/text-copy';
import URL from './components/url';
import style from './page-view.module.scss';
import { ModuleComponents, PageViewProps } from './types';

export default function PageView({
  avatar,
  username,
  bio,
  socialLinks,
  userModules,
  className = '',
  scene = 'page'
}: PageViewProps) {
  const moduleMap: Record<ModuleType, ModuleComponents> = {
    [ModuleType.URL]: URL,
    [ModuleType.DIVIDER]: Divider,
    [ModuleType.IMAGE]: Image,
    // [ModuleType.QR_CODE]: QRCode,
    [ModuleType.TEXT]: Text,
    [ModuleType.TEXT_COPY]: TextCopy,
  }

  return (
    <main className={cls(style.wrapper, className)}
      style={{
        background: ''
      }}
    >
      <div className={style['inner-wrapper']}>
        <section className={style['base-info']}>
          <Avatar
            isBordered
            className={style.avatar}
            src={avatar}
          />

          <p className={style.username}>{username}</p>

          {/* TODO 处理换行，最大宽度 */}
          {
            bio ? (
              <div className={style.bio}>{bio}</div>
            ) : null
          }

          <SocialLinks
            className={style['social-links']}
            links={socialLinks}
          />
        </section>

        <section className={style['user-modules']}>
          {
            userModules.map(module => {
              const Component = moduleMap[module.type];

              // @ts-expect-error 动态渲染组件
              return <Component key={module.id} {...module} />;
            })
          }
        </section>

        <FooterLogo className={style['footer-logo']} />
      </div>

      <ImageModal rounded={scene === 'simulator'} />
    </main>
  )
}
