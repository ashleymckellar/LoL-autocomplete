import { createContext, useEffect, useState } from "react";
import { getLeagueInfo } from "../http";

const Context = createContext()



const ContextProvider = ({children}) => { 

    const [legends, setLegends] = useState([])


    useEffect(() => {
        getLeagueInfo().then(data => setLegends(Object.values(data)))
    }, [])

    // console.log(legends)

    const spriteImageUrl = `https://ddragon.leagueoflegends.com/cdn/11.9.1/img/sprite/champion0.png`;

    return (
        <Context.Provider value={{
            legends,
            spriteImageUrl
        }}>
            {children}
        </Context.Provider>
    )
 }


 export {ContextProvider, Context}