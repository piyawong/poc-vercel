import { redirect } from 'next/navigation';
import PropTypes from 'prop-types';

import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }: React.PropsWithChildren<{}>) => {
  const { loading, user } = useAuth();

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  redirect('/login');
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
