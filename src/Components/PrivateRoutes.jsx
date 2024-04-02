import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading) {
        return <span className="loading loading-spinner loading-lg flex justify-center items-center"></span>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;