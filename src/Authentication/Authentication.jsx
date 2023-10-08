import { createContext } from "react";
import PropTypes from 'prop-types';
 
const AuthContext = createContext(null)
const Authentication = ({children}) => {


    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Authentication.propTypes = {
    children: PropTypes.node,
};

export default Authentication;