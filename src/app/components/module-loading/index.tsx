import Loading from '../loading';
import Mask from '../mask';
import { ModuleLoadingProps } from './types';

export default function ModuleLoading({
  show
}: ModuleLoadingProps) {
  return (
    <Mask show={show}>
      <Loading size={60} />
    </Mask>
  )
}
