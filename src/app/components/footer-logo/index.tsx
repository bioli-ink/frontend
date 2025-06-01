import { cls } from '@/app/utils/string';

import Slogan from '../slogan';
import style from './footer-logo.module.scss';
import { FooterLogoProps } from './types';

export default function FooterLogo(props: FooterLogoProps = {}) {
  const { className = '' } = props;

  return (
    <footer className={cls(style.wrapper, className)}>
      <Slogan />
    </footer>
  )
}
