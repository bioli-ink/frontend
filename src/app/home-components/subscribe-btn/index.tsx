'use client';

import { Button } from '@heroui/button';

export default function SubscribeBtn() {
  const onSubscribe = () => {
    alert('订阅暂时未开放');
  }

  return (
    <Button radius='full' style={{ backgroundColor: '#8261ee', color: '#fff' }} onPress={onSubscribe}>立即订阅</Button>
  )
};
