import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";


// const PrivateRoute = ({ element, ...rest }) => {
//   const navigate = useNavigate();
//   const auth = useSelector(state => state.firebase.auth);
//   return (
//     <Route {...rest} element={auth ? element : navigate('/')} />
//   );
// };




const PrivateRoute = ({
  component: Component
}) => {
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  if (user) {
    console.log(user)
    return <Component />;
  }
  return navigate('/');
};



export default PrivateRoute;