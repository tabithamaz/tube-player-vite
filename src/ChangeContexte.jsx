import { createContext, useState } from "react";

export const ChangeContexte = createContext({}) 


export const ContextProvider = ({children}) => {
    const [comments, setComments] = useState([]);
    const [user, setUser]= useState({})
    return (
        <ChangeContexte.Provider value={{comments, setComments,user,setUser}}>
            {children}
        </ChangeContexte.Provider>

    
    )
}