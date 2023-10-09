import   { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Authentication/Authentication';
import { Navigate, useLocation } from 'react-router-dom';
import { BallTriangle } from  'react-loader-spinner'

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)

    const location=useLocation()
    console.log(location);
    if (loading) {
        return <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      }
    if (user) {
        return children;
      }
      return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

PrivateRoute.propTypes = {
    
};

export default PrivateRoute;