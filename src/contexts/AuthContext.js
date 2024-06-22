import { useState, useEffect, createContext } from "react";
import { User } from "../api/user";
import { Auth } from "../api";
import { hasExpiredToken } from "../utils/token";

export const AuthContext = createContext();



export function AuthProvider(props) {

    const { children } = props;
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [isCustomer, setIsCustomer] = useState(false);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const userController = new User();
    const authController = new Auth();

    useEffect(() => {
        (async () => {
            const accessToken = await authController.getAccessToken();
            const refreshToken = await authController.getRefreshToken();

            if (!accessToken || !refreshToken) {
                logout();
                setLoading(false);
                return;
            }

            if (hasExpiredToken(accessToken)) {
                if (hasExpiredToken(refreshToken)) {
                    logout();
                } else {
                    reLogin(refreshToken);
                }
            } else {
                await login(accessToken);
            }

            setLoading(false);
        })();
    }, []);


    const reLogin = async (refreshToken) => {

        try {
            const { accessToken } = await authController.refreshAccessToken(
                refreshToken
            );
            await authController.setAccessToken(accessToken);
            await login(accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    const login = async (accessToken) => {

        try {

            setLoading(true);

            const response = await userController.getMe(accessToken);

            
            const {user,customer,employee} = response.data;

            if(customer){
                setIsCustomer(true)
                setUserInfo(customer)
            }else{
                setUserInfo(employee)
            }


            setUser(user)
            setToken(accessToken)

            setLoading(false);

        } catch (error) {
            console.log("whoisit" + isCustomer)
            setLoading(false)
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        authController.removeTokens();
    };

    const updateUser = (key, value) => {

        setUser({
            ...user,
            [key]: value,
        });
    }

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
        userInfo,
        isCustomer
    };

    if (loading) return null;

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}