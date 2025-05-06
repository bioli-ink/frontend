import { EVENTS } from '@/app/constant/events';

import event from '../event';
import { parseJSON } from '../transform';

export const uploadBase64 = ({ base64, token, key = '' }: { base64: string; token: string, key?: string }): Promise<{
  key: string;
  hash: string;
}> => {
  return new Promise((resolve, reject) => {
    const pic = base64.replace('data:image/jpeg;base64,', '');
    const url = `${process.env.NEXT_PUBLIC_IMAGE_UPLOAD}/putb64/-1${key ? `/key/${btoa(key)}` : ''}`;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange=function(){
      if (xhr.readyState==4){
        const result = parseJSON(xhr.responseText);

        if (result.error || !Object.keys(result).length) {
          const errorMsg = result.error || '上传失败，请重试';

          event.emit(EVENTS.SHOW_ALERT, {
            text: errorMsg,
            color: 'danger',
          });
          reject(errorMsg);
        } else {
          resolve(parseJSON(xhr.responseText));
        }
      }
    }
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('Authorization', `UpToken ${token}`);
    xhr.send(pic);
  })
};
