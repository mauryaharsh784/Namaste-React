 import { useRouteError } from "react-router-dom"


const Error = () => {
  const err=useRouteError();
  console.log(err);
  
  <div>
    <h1>this error page</h1>
    <h2>Something went rong</h2>
  </div>
}

export default Error
