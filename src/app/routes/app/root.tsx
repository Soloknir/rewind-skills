import { Outlet } from 'react-router';

import { DefaultLayout } from 'components/layouts';

const AppRoot = () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default AppRoot;
