import { createContext, useCallback, useEffect, useState} from "react";
import { postRequest } from "../utils/services";
import { baseUrl } from "../utils/services";
 
export const AuthContext = createContext();// it is a context variable that is used to store user data from the server and error messages from the server in the context

export const AuthContextProvider = ({children}) =>{ 
    const [user,setUser] = useState(null); // it is a state variable that is used to store user data from the server
    const [registerError, setRegisterError] = useState(null); // it is a state variable that is used to store error messages from the server
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name:"",
        email:"",
        password:"",
    });//{children} => {props.children} in functional component

    const [loginError, setLoginError] = useState(null); // it is a state variable that is used to store error messages from the server
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:"",
    });

    //console.log("registerInfo",registerInfo);
    //console.log("User",user);
    //console.log("loginInfo",loginInfo);
    useEffect(()=>{
        const user = localStorage.getItem("User");

        setUser(JSON.parse(user));
    }, []);
    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info);
    }, []);// it is a dependency array that is used to check if the state changes and it is called when a state changes and it is a dependency array
    // it is a callback function that is called when a state changes and it is a dependency array 
    const updateLoginInfo = useCallback((info)=>{
        setLoginInfo(info);
    }, []);
    const registerUser = useCallback(async (e)=>{
        e.preventDefault();

        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await postRequest(`${ baseUrl }/users/register`, JSON.stringify(registerInfo)); // it is a promise that is called when a state changes and it is a dependency array 
        setIsRegisterLoading(false);
        if(response.error){
            return setRegisterError(response);// it is a state variable that is used to store error messages from the server in the state variable 
        }
        localStorage.setItem("User",JSON.stringify(response));// it is a local storage that is used to store user data from the server
        setUser(response);
    },[registerInfo]);// it is a dependency array that is used to check if the state changes and it is called when a state changes and it is a dependency array 

    const loginUser = useCallback(async(e)=>{
        e.preventDefault();

        setIsLoginLoading(true);
        setLoginError(null);
        const response = await postRequest(`${ baseUrl }/users/login`, JSON.stringify(loginInfo));
        setIsLoginLoading(false);
        if(response.error){
            return setLoginError(response);
        }
        localStorage.setItem("User",JSON.stringify(response));
        setUser(response);

    },[loginInfo]);

    const logoutUser = useCallback(()=>{
        localStorage.removeItem("User");
        setUser(null);
    },[]);

    return (<AuthContext.Provider value={{ user , registerInfo , updateRegisterInfo , registerUser , registerError , isRegisterLoading, logoutUser, loginUser, loginError, isLoginLoading, updateLoginInfo, loginInfo }}> 
        {children}
    </AuthContext.Provider>);//it is a provider that is used to provide user data from the server and error messages from the server to the children components
};