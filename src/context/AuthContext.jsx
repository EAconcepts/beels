import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const userData = localStorage.getItem('logged_in') && JSON.parse(localStorage.getItem('logged_in'));
    
    const [token, setToken] = useState(userData ? userData?.token : '');
    const [user, setUser] = useState(userData ? userData?.user : null);
    
    const logout = () => {
        setToken('');
        setUser(null);
        localStorage.removeItem('logged_in');
        window.location.reload();
    }


    useEffect(() => {
        if(localStorage.getItem('logged_in')){
            setToken(userData?.token);
            setUser(userData?.user);
        }
    }, [])

 


    return(
        <AuthContext.Provider value={{ token, setToken, setUser, user, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider