import SiteName from '../site-name';
import style from './slogan.module.scss';

export default function Slogan() {
  return (
    <>
      <div className={style['plain-text']}>MADE WITH</div>
      <SiteName />
    </>
  )
}