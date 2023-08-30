import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

function ProtectedRoutes() {

 const {loading, isAuthenticathed} = useAuth();
 console.log(loading, isAuthenticathed);
 if(loading) return <h1 className="flex h-[calc(100vh-100px)] items-center justify-center text-4xl ">____<span className="text-4xl animate-pulse"> Loading.... </span> ____</h1>
 if(!loading && !isAuthenticathed) return <Navigate to='/login' replace/>

  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default ProtectedRoutes