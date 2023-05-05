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
  const auth = useSelector(state => state.firebase.auth);
  const navigate = useNavigate();
  if (auth) return <Component />;
  return navigate('/');
};



export default PrivateRoute;