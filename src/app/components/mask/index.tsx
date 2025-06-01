import style from './mask.module.scss';
import { MaskProps } from './types';

export default function Mask({
  show,
  isGlobal,
  children
}: MaskProps) {
  if (!show) return null;

  return (
    <div className={style.wrapper} style={{ ...(isGlobal ? { position: 'fixed' } : { position: 'absolute' }) }}>
      {children}
    </div>
  )
}
