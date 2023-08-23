import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = ()=>{
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isAuthenticathed, setIsAuthenticathed]=useState(false);
    const [errors, setErrors]=useState([]);ç

    const signup = async (user)=>{
        try {
            const res = await registerRequest(values);
            console.log(res)
            setUser(res.data);
            setIsAuthenticathed(true);
        } catch (error) {
            setErrors(error.reponse.data)
            console.log(error)
        }
    }

    return( <AuthContext.Provider value={{
        signup,
        user,
        isAuthenticathed,
        errors

    }}>
        {children}
    </AuthContext.Provider>
    )
}
