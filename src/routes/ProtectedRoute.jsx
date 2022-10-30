import { Navigate } from 'react-router-dom';
function ProtectedRoute({ user, redirectPath = '/', children }) {
    console.log(user);
    if (user) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
}

export default ProtectedRoute;
