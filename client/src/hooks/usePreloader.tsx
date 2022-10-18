import { Preloader } from '../components/preloader/preloader';
import { useDevices } from './useDevices';
import { useUser } from './useUser';

export const usePreloader = () => {
  const { loadDevices } = useDevices();
  const { loadingUser } = useUser();
  return (loadDevices || loadingUser) && <Preloader />;
};
