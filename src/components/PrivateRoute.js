import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const PrivateRoute = ({component: Comp, children, ...rest}) => {
  const user = useContext(UserContext);
  const Component = () => Comp ? (<Comp>{children}</Comp>) : children;

  return (
    <Route 
      {...rest} 
      render={({location}) => !user.id ? (<Component />) : (<Redirect to={{state:{from: location}, pathname:'SignIn'}} />)} 
  />);
};

export default PrivateRoute;