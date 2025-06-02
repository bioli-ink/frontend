import qrcode from 'qrcode';
import { useEffect, useRef, useState } from 'react';

import Logo from '@/app/components/logo';

import style from './qrcode.module.scss';
import { QRCodeProps } from './types';

export default function QRCode({
  text,
  size = { width: 300, height: 300 },
  logoSize = 40
}: QRCodeProps) {
  const canvasRef = useRef(null);
  const [success, setSuccess] = useState(false);

  useEffect(()=> {
    if (!text || success) return;

    qrcode.toCanvas(canvasRef.current, text, { ...size }, (error) => {
      if (error) {
        console.error(error);
        return;
      }

      setSuccess(true);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div className={style.wrapper}>
      <canvas ref={canvasRef} />

      <div className={style['qrcode-logo']}>
        <Logo color='white' width={logoSize} height={logoSize} />
      </div>
    </div>
  )
}
