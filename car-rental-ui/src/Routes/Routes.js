
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "../Components/Content/Home/Home";
import Register from "../Components/Content/Register/Register";
import RegisterCompleted from "../Components/Content/Register/RegisterCompleted/RegisterCompleted";
import App from "../Components/Root/App";

const CarRentalRoutes = (params) => {
  return (

    <Routes>

      {/* <Route
            path="/"
            exact
            render={
              () => {
                return <Navigate to="/" />
              }
            } /> */}
      <Route path="/" exact element={<Home />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/register/completed" exact element={<RegisterCompleted />} />


      <Route path="" element={<Navigate to="/" />} />

      {/* <Route component={PageNotFound} /> */}

    </Routes>



  );
}

export default CarRentalRoutes;