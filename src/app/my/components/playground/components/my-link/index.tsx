import { Card, CardBody } from '@heroui/card';
import { Link } from '@heroui/link';
import useLatest from 'ahooks/lib/useLatest';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { RootState } from '@/app/my/redux';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import MockUp from '../mock-up';
import QRCode from '../qrcode';
import Share from '../share';
import style from './my-link.module.scss';

export default function MyLink() {
  const { username, avatar, bio, socialLinks, displayedUserModules } = useSelector((root: RootState) => root.my);
  const [permanentLink, setPermanentLink] = useState('');
  const latestPermanentLink = useLatest(permanentLink);
  const latestUsername = useLatest(username);
  const latestAvatar = useLatest(avatar);
  const latestBio = useLatest(bio);
  const latestSocialLinks = useLatest(socialLinks);
  const latestDisplayedUserModules = useLatest(displayedUserModules);

  useEffect(() => {
    setPermanentLink(`${location.protocol}//${location.host}/${username}`);
  }, [username]);

  const onShareClick = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: latestUsername.current,
      body: (
        <Share
          avatar={latestAvatar.current}
          link={latestPermanentLink.current}
        />
      )
    });
  };

  useEventListener(EVENTS.SHOW_SHARE, onShareClick);

  const onQRCode = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: `${latestUsername.current}的二维码`,
      body: <QRCode text={latestPermanentLink.current} />,
      backTo: EVENTS.SHOW_SHARE,
    });
  };

  useEventListener(EVENTS.SHOW_QR_CODE, onQRCode);

  const onMockUp = () => {
    event.emit(EVENTS.SHOW_MODAL, {
      title: '生成海报',
      body: (
        <MockUp
          avatar={latestAvatar.current}
          username={latestUsername.current}
          bio={latestBio.current}
          socialLinks={latestSocialLinks.current}
          userModules={latestDisplayedUserModules.current}
          link={latestPermanentLink.current}
        />
      ),
      backTo: EVENTS.SHOW_SHARE,
      modalContentClassName: style['mockup-content'],
      modalBodyClassName: style['mockup-body']
    });
  };

  useEventListener(EVENTS.SHOW_MOCK_UP, onMockUp);

  return (
    <Card shadow='none'>
      <CardBody className={style.wrapper}>
        <div className={style['inner-wrapper']}>
          <span>我的永久链接：</span>

          {
            username ? (
              <>
                <Link
                  isExternal
                  color='danger'
                  underline='hover'
                  href={permanentLink}
                >{permanentLink}</Link>

                <i
                  className={cls('iconfont-common', 'icon-common-share', 'icon-action', style['icon-share'])}
                  onClick={onShareClick}
                ></i>
              </>
            ) : null
          }
        </div>
      </CardBody>
    </Card>
  )
}