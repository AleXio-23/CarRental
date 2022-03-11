 
import {
    BrowserRouter as Router,
   
    Route,
    Link, 
    Routes,
    Navigate
  } from "react-router-dom";  
import Register from "../Components/Content/Register/Register";
import App from "../Components/Root/App";

const CarRentalRoutes = (params) => { 
  console.log("Adasd");
  return (
 
        <Routes>
          
          {/* <Route
            path="/"
            exact
            render={
              () => {
                return <Navigate to="/home" />
              }
            } /> */}
          <Route path="/:urlType" exact element={App} />
          <Route path="/register" exact element={Register}/>
       
          {/* <Route component={PageNotFound} /> */}

        </Routes>

 

  );
}

export default CarRentalRoutes;