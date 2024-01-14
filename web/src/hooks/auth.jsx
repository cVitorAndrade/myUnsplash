import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider ({ children }) {
    const [data, setData] = useState({});

    async function signIn ({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            console.log("No signin");

            localStorage.setItem("@myUnsplash:token", token);
            localStorage.setItem("@myUnsplash:user", JSON.stringify(user))

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({ user, token })
            console.log(user);
            console.log(token);

        } catch (error) {
            if ( error.response ) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível fazer login.")
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem("@myUnsplash:user");
        const token = localStorage.getItem("@myUnsplash:token");

        if ( user && token ) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, []);
    
    return(
        <AuthContext.Provider 
            value={{
                signIn,
                user: data.user
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

function useAuth () {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }