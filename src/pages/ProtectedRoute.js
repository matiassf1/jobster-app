import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {

    const { user } = useSelector((store) => store.user);

    if (!user) <Navigate to='/landing' />
    return children
}
